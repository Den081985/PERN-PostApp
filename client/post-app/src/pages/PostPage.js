import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ListGroup, Card, Button } from "react-bootstrap";
import { userContext } from "../context/userContext";
import { delete_post } from "../http/postApi";
import { CREATE_ROUTE } from "../utils/constants";

const PostPage = () => {
  const navigate = useNavigate();
  const { post, setPost } = useContext(userContext);

  const deletePost = async () => {
    try {
      const data = await delete_post(post.id);
      // console.log(data);
      setPost(null);
      navigate(CREATE_ROUTE);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container className="mt-5 " style={{ width: "800px" }}>
      <ListGroup>
        {post && (
          <ListGroup.Item className="bg-light">
            <Card style={{ border: "1px solid black" }}>
              <Card.Header>{`Author: ${post.author}`}</Card.Header>
              <Card.Body>
                <Card.Title>{`Title: ${post.title}`}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Button variant="outline-secondary" onClick={deletePost}>
                  Delete Post
                </Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  );
};

export default PostPage;
