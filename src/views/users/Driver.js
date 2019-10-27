import React, { Component } from "react";

import {Modalx } from './Modal.js';
import {  Card, CardHeader, CardBody } from "shards-react";

class Driver extends Component {
  render() {
    return (
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Tài xế</h6>
        </CardHeader>
        <CardBody className="p-0 pb-3">
          <table className="table mb-0">
            <thead className="bg-light">
              <tr>
                <th
                  style={{ textAlign: "center" }}
                  scope="col"
                  className="border-0"
                >
                  STT
                </th>
                <th
                  style={{ textAlign: "center" }}
                  scope="col"
                  className="border-0"
                >
                  Tên đối tác
                </th>
                <th
                  style={{ textAlign: "center" }}
                  scope="col"
                  className="border-0"
                >
                  Hạng
                </th>
                <th
                  style={{ textAlign: "center" }}
                  scope="col"
                  className="border-0"
                >
                  Ngày tham gia
                </th>
                <th
                  style={{ textAlign: "center" }}
                  scope="col"
                  className="border-0"
                >
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>1</td>
                <td style={{ textAlign: "center" }}>Ali</td>
                <td style={{ textAlign: "center" }}>Kerry</td>
                <td style={{ textAlign: "center" }}>Russian Federation</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <Modalx />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>1</td>
                <td style={{ textAlign: "center" }}>Ali</td>
                <td style={{ textAlign: "center" }}>Kerry</td>
                <td style={{ textAlign: "center" }}>Russian Federation</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <Modalx />
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    );
  }
}

export default Driver;
