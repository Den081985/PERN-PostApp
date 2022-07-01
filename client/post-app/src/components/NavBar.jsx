import React from "react";
import { useContext } from "react";
import { Navbar, Container, NavbarBrand, Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
import {
  CREATE_ROUTE,
  POSTS_ROUTE,
  REGISTER_ROUTE,
  ALL_ROUTE,
} from "../utils/constants";

const NavBar = () => {
  const navigate = useNavigate();

  const exit = () => {
    if (isAuth) {
      localStorage.removeItem("token");
      navigate(REGISTER_ROUTE);
    } else {
      navigate(REGISTER_ROUTE);
    }
  };

  let { isAuth } = useContext(userContext);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavbarBrand>Posts App</NavbarBrand>
        <Nav className="ml-auto">
          <Button
            variant="outline-secondary"
            style={{ marginRight: "1rem" }}
            onClick={() => navigate(ALL_ROUTE)}
          >
            All Posts
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => navigate(CREATE_ROUTE)}
          >
            Create
          </Button>
          <Button
            variant="outline-secondary"
            style={{ marginLeft: "1rem" }}
            onClick={() => navigate(POSTS_ROUTE)}
          >
            Posts
          </Button>
          <Button
            variant="outline-secondary"
            style={{ marginLeft: "1rem" }}
            onClick={exit}
          >
            {isAuth ? "Exit" : "Auth"}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
