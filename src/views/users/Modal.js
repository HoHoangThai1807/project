import React from "react";
import { Modal } from "react-bootstrap";
import { Card, CardHeader, ListGroup, ListGroupItem, Row, Col, Form } from "shards-react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import TextField from "@material-ui/core/TextField";

import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import Servicesradio from "../../components/Servicesradio/Servicesradio";

function EditDriverButtonModal(props) {
  const serviceArray = ["Food", "Move", "shopping"];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      top
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Thông tin đối tác</h6>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-4">
              <Row>
                <Col>
                  <Form>
                    <Row form className="mb-3">
                      <Col md="7" className="form-group">
                        <TextField
                          fullWidth
                          id="outlined-name"
                          label="Họ và tên"
                          placeholder="Họ và tên"
                          onChange={() => {}}
                          variant="outlined"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Col>
                      <Col md="5" className="form-group">
                        <TextField
                          fullWidth
                          id="standard-number"
                          label="Age"
                          onChange={() => {}}
                          type="number"
                          variant="outlined"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Col>
                    </Row>
                    <Row form className="mb-3">
                      <Col md="12" className="form-group">
                        <TextField
                          id="outlined-full-width"
                          label="Tên trường"
                          placeholder="Tên trường"
                          fullWidth
                          variant="outlined"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Col>
                    </Row>
                    <Row form>
                      <Col md="12" className="form-group">
                        <TextField
                          id="standard-full-width"
                          label="Email"
                          placeholder="Email"
                          fullWidth
                          variant="outlined"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card small style={{ padding: "25px" }}>
          <CardHeader>
              <h6 className="m-0">Services</h6>
            </CardHeader>
            <ListGroup>
            {serviceArray.map((e, i) => (
              <Servicesradio key={i} ServiceName={e} />
            ))}
            </ListGroup>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <ButtonToolbar>
          <Button
            onClick={props.onHide}
            variant="contained"
            color="primary"
            size="small"
          >
            Update
          </Button>
          <Button onClick={props.onHide} className="ml-3" variant="contained" color="secondary" size="small"  >
            Cancel
          </Button>
        </ButtonToolbar>
      </Modal.Footer>
    </Modal>
  );
}
function EditPassengerModal(props) {
  return (
    <Modal  {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" top >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Passenger List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
              <h6 className="m-0" justifyContent="flex-end" >Thông tin đối tác</h6>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-4">
              <Row>
                <Col>
                  <Form>
                    <Row form className="mb-3">
                      <Col md="6" className="form-group">
                        <TextField
                          fullWidth
                          id="outlined-name"
                          label="Họ và tên"
                          placeholder="Họ và tên"
                          onChange={() => {}}
                          variant="outlined"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Col>
                      <Col md="6" className="form-group">
                        <TextField
                          fullWidth
                          id="standard-number"
                          label="Số điện thoại"
                          placeholder="Số điện thoại"
                          onChange={() => {}}
                          type="number"
                          variant="outlined"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Col>
                    </Row>
                    <Row form className="mb-3">
                      <Col md="12" className="form-group">
                        <TextField
                          id="outlined-full-width"
                          label="Email"
                          placeholder="Email"
                          fullWidth
                          variant="outlined"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Col>
                    </Row>
                    <label >Sign count : </label>
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <ButtonToolbar>
          <Button onClick={props.onHide} variant="contained" color="primary" size="small">
            Update
          </Button>
          <Button onClick={props.onHide} className="ml-3" variant="contained"  color="secondary" size="small" >
            Cancel
          </Button>
        </ButtonToolbar>
      </Modal.Footer>
    </Modal>
  );
}
function DeleteButtonModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Alert !
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Muốn xóa thì xóa , còn không xóa thì xóa !?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Delete</Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
function Modalx() {
  const [editModalShow, setEditModalShow] = React.useState(false);
  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  return (
    <ButtonToolbar>
      <IconButton
        aria-label="delete"
        onClick={() => setEditModalShow(true)}
        size="small"
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <EditDriverButtonModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
      />

      <IconButton
        aria-label="delete"
        color="secondary"
        className="ml-3"
        onClick={() => setDeleteModalShow(true)}
        size="small"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
      <DeleteButtonModal
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
      />
    </ButtonToolbar>
  );
}
function Modaly() {
  const [editModalShow, setEditModalShow] = React.useState(false);
  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  return (
    <ButtonToolbar>
      <IconButton aria-label="delete" onClick={() => setEditModalShow(true)} size="small" >
        <EditIcon fontSize="small" />
      </IconButton>
      <EditPassengerModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
      /> 
      <IconButton
        aria-label="delete"
        color="secondary"
        className="ml-3"
        onClick={() => setDeleteModalShow(true)}
        size="small"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
      <DeleteButtonModal
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export { Modalx, Modaly };
