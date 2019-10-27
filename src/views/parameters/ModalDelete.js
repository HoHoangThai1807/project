import React, { } from "react";
import { Button, Modal } from "react-bootstrap";
import parameter from "../parameters/Parameters.module.scss";

export default function ModalDelete({ isDeleteShow, hide }) {
  return (
    <>
      <div>
        <Modal show={isDeleteShow} onHide={hide}>
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Xóa tham số</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc chắn muốn xóa không!!!</Modal.Body>
            <Modal.Footer>
              <Button
                className={parameter.close}
                variant="danger"
                onClick={hide}
              >
                OK
              </Button>
              <Button variant="primary" onClick={hide}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </>
  );
}
