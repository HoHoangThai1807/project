import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function MyModal({ isShowing, hide, title }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems:"center"}}>
        <Modal show={isShowing} onHide={hide} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Chi Tiết Chuyến Đi</Modal.Title>
          </Modal.Header>
          <Modal.Body>{title}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hide}>
              Close
            </Button>
            <Button variant="primary" onClick={hide}>
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
