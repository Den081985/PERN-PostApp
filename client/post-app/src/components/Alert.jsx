import React from "react";
import { Alert, Button } from "react-bootstrap";

const AlertCreate = ({ show, closeAlert }) => {
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Ok there!</Alert.Heading>
        <p>Now you can see your post!</p>
        <div className="d-flex justify-content-end">
          <Button onClick={closeAlert} variant="outline-success">
            Push to see
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default AlertCreate;
