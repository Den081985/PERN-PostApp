import React, { useContext, useState } from "react";
import { Container, Form, FloatingLabel, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
import { create_post } from "../http/postApi";
import { POSTS_ROUTE } from "../utils/constants";
import AlertCreate from "../components/Alert";

const CreatePage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const { setPost, userId, alert, setAlert } = useContext(userContext);

  const closeAlert = () => {
    setAlert(false);
    navigate(POSTS_ROUTE);
  };

  const createPost = async () => {
    try {
      const data = await create_post(author, title, content, userId);

      setPost(data);
      setAuthor("");
      setTitle("");
      setContent("");
      setAlert(true);
      // navigate(POSTS_ROUTE);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "800px" }} className="mt-5 p-5" bg="light">
        <AlertCreate show={alert} closeAlert={closeAlert} />
        <Form.Floating>
          <FloatingLabel controlId="floatingInputGrid" label="Author">
            <Form.Control
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Title">
            <Form.Control
              type="text"
              placeholder="Title"
              className="mt-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Content">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              className="mt-3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FloatingLabel>
          <Button
            variant="outline-secondary"
            className="mt-3"
            onClick={createPost}
          >
            Secondary
          </Button>
        </Form.Floating>
      </Card>
    </Container>
  );
};

export default CreatePage;
