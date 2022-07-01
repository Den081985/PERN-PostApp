import React, { useContext, useEffect, useState } from "react";
import { Container, ListGroup, Card } from "react-bootstrap";
import Loader from "../components/Loader";
import { userContext } from "../context/userContext";
import Pages from "../components/Pagination";
import { get_all } from "../http/postApi";

const AllPage = () => {
  const { posts, setPosts, page, setTotalCount, loading, setLoading } =
    useContext(userContext);

  // const [posts, setPosts] = useState([]);
  // const getPosts = async () => {
  //   try {
  //     const data = await get_all();
  //     console.log(data);
  //     setPosts(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  useEffect(() => {
    setLoading(true);
    get_all(2, 5).then((data) => {
      setTotalCount(data.count);
      setPosts(data.rows);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    get_all(page, 4).then((data) => {
      setTotalCount(data.count);
      setPosts(data.rows);
      setLoading(false);
    });
  }, [page]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Container className="mt-3 mb-3" style={{ width: "800px" }}>
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item className="bg-light" key={post.id}>
            <Card style={{ border: "1px solid black" }}>
              <Card.Header>{`Author: ${post.author}  ${
                post.user ? post.user.email : ""
              }`}</Card.Header>
              <Card.Body>
                <Card.Title>{`Title: ${post.title}`}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Pages />
    </Container>
  );
};

export default AllPage;
