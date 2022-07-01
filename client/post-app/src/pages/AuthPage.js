import React, { useContext, useState } from "react";
import { Form, Container, Button, Card, Row } from "react-bootstrap";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { login, register } from "../http/userApi";
import { userContext } from "../context/userContext";
import { CREATE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/constants";
import ModalCreate from "../components/modal/CreatedPost";

const AuthPage = () => {
  const location = useLocation();

  let { setIsAuth, setUserId, show, setShow } = useContext(userContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //isLogin = true если поле объекта location.pathname = /login
  let isLogin = location.pathname === LOGIN_ROUTE;

  const handleClose = () => {
    setShow(false);
    navigate(CREATE_ROUTE);
  };

  const getRequest = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await register(email, password);
      }
      setIsAuth(true);
      setUserId(data.id);
      setShow(true);

      // navigate(CREATE_ROUTE);

      // console.log(data.id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "600px" }} className="mt-5 p-5" bg="light">
        <Form>
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Control
            className="mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Have no account?
                <NavLink to={REGISTER_ROUTE} style={{ marginLeft: "5px" }}>
                  Register
                </NavLink>
              </div>
            ) : (
              <div>
                Have an account?
                <NavLink to={LOGIN_ROUTE} style={{ marginLeft: "5px" }}>
                  Enter
                </NavLink>
              </div>
            )}
          </Row>
          <Button
            variant="outline-secondary"
            onClick={getRequest}
            style={{ marginTop: "1rem" }}
          >
            {isLogin ? "Enter" : "Register"}
          </Button>
        </Form>
      </Card>
      <ModalCreate show={show} handleClose={handleClose} />
    </Container>
  );
};

export default AuthPage;
