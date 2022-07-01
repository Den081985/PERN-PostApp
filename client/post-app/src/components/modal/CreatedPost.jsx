import React from "react";
// import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { userContext } from "../../context/userContext";

const ModalCreate = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hi there!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ok.Now you can create your own post!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreate;
