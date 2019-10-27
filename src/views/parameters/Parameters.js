import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { connect } from 'react-redux';

import PageTitle from "../../components/common/PageTitle";
import parameter from "../parameters/Parameters.module.scss";
import MyModal from "../parameters/Modal.js";
import ModalDelete from "./ModalDelete.js";

const Parameters = ({ listParam }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isDeleteShow, setIsDeleteShow] = useState(false);

  console.log(listParam)
  useEffect(() => {
    // fetchParams();
  }, [listParam]);

  function toggle(type) {
    return () => {
      if (type === "add") {
        return setIsShowing(!isShowing);
      }
      if (type === "delete") {
        return setIsDeleteShow(!isDeleteShow);
      }
    };
  }
  
  const display = listParam.map((p, idx) => {
    return (<tr key={idx}>
      <td>{p.name}</td>
      <td>{p.type}</td>
      <td>{p.description}</td>
      <td>
        <button
          onClick={toggle("delete")}
          className="bg-transparent border-0 text-danger"
        >
          <i className={`material-icons`}>delete</i>
        </button>
      </td>
    </tr>)
  });

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Parameters"
          subtitle="Overview"
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
      <Row>
        <div className="container-fluid d-flex justify-content-end mb-4">
          <button
            size="medium"
            className={parameter.buttonAdd}
            onClick={toggle("add")}
          >
            <i className={`material-icons ${parameter.iconModal} `}>add</i>
          </button>
        </div>
      </Row>
      <Row className={parameter.table}>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h5 className="m-0">Bảng tham số</h5>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Tên tham số
                    </th>
                    <th scope="col" className="border-0">
                      Kiểu dữ liệu
                    </th>
                    <th scope="col" className="border-0">
                      Ý nghĩa
                    </th>
                    <th scope="col" className="border-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {display}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <MyModal isShowing={isShowing} hide={toggle("add")} />
      {/* <ModalDetail /> */}
      <ModalDelete isDeleteShow={isDeleteShow} hide={toggle("delete")} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    listParam: state.params
  }
};

export default connect(mapStateToProps, null)(Parameters);
