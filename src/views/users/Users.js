import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Nav, Tab, } from 'react-bootstrap';

import PageTitle from "../../components/common/PageTitle";
import Driver from "./Driver.js";
import ListPassenger from "./ListPassenger";



const Users = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Users" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>

    <Row>
      <Col>
        <Tab.Container id="bottom-tabs-expamle" defaultActiveKey="first" >
          <Row >
            <Nav variant="pills" className="flex-row mb-4 ml-3">
              <Nav.Item>
                <Nav.Link eventKey="first">Danh sách tài xế</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Danh sách hành khách</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Driver/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ListPassenger/>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Col>
    </Row>
  </Container>
);

export default Users;
