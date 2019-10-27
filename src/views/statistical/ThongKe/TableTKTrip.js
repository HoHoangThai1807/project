import React, { useState } from "react";

import { Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Badge } from "react-bootstrap";
import thongke from "./ThongKe.module.scss";
import MyModal from "./Modal.js";

const TableTKTrip = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isTitle, setIsTitle] = useState("");

  function toggle(title) {
    return () => {
      setIsShowing(!isShowing);
      setIsTitle(title);
    };
  }

  return (
    <div>
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Danh Sách Chuyến Đi</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      Tình Trạng
                    </th>
                    <th scope="col" className="border-0">
                      Mã Chuyến
                    </th>
                    <th scope="col" className="border-0">
                      Điểm Đi
                    </th>
                    <th scope="col" className="border-0">
                      Điểm Đến
                    </th>
                    <th scope="col" className="border-0">
                      Quãng Đường
                    </th>
                    <th scope="col" className="border-0">
                      Tài Xế
                    </th>
                    <th scope="col" className="border-0">
                      Khách Hàng
                    </th>

                    <th scope="col" className="border-0">
                      Giá
                    </th>

                    <th scope="col" className="border-0">
                      Chi Tiết
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div>
                        <Badge className={thongke.badgeCancel}>Đã Huỷ</Badge>
                      </div>
                    </td>
                    <td>Kerry</td>
                    <td>Russian Federation</td>
                    <td>Gdańsk</td>
                    <td>107-0339</td>
                    <td>107-0339</td>
                    <td>107-0339</td>
                    <td>107-0339</td>
                    <td>
                      <button
                        onClick={toggle("BaoTruong")}
                        className={thongke.penMore}
                      >
                        <i className={`material-icons ${thongke.penMore} `}>
                          create
                        </i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <div>
                        <Badge className={thongke.badgeSuccess}>
                          Hoàn Thành
                        </Badge>
                      </div>
                    </td>
                    <td>Angela</td>
                    <td>Estonia</td>
                    <td>Borghetto di Vara</td>
                    <td>1-660-850-1647</td>
                    <td>1-660-850-1647</td>
                    <td>1-660-850-1647</td>
                    <td>1-660-850-1647</td>
                    <td>
                      <button
                        onClick={toggle("Nguyen Van A")}
                        className={thongke.penMore}
                      >
                        <i className={`material-icons ${thongke.penMore} `}>
                          create
                        </i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <div>
                        <Badge className={thongke.badgeSuccess}>
                          Hoàn Thành
                        </Badge>
                      </div>
                    </td>
                    <td>Nathan</td>
                    <td>Nathan</td>
                    <td>Cyprus</td>
                    <td>Cyprus</td>
                    <td>Cyprus</td>
                    <td>Braunau am Inn</td>
                    <td>214-4225</td>

                    <td>
                      <button
                        onClick={toggle("Nguyen Van B")}
                        className={thongke.penMore}
                      >
                        <i className={`material-icons ${thongke.penMore} `}>
                          create
                        </i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <div>
                        <Badge className={thongke.badgeCancel}>Đã Huỷ</Badge>
                      </div>
                    </td>
                    <td>Angela</td>
                    <td>Liberia</td>
                    <td>Liberia</td>
                    <td>Bad Hersfeld</td>
                    <td>Bad Hersfeld</td>
                    <td>1-848-473-7416</td>
                    <td>1-848-473-7416</td>
                    <td>
                      <button
                        onClick={toggle("BaoTruong")}
                        className={thongke.penMore}
                      >
                        <i className={`material-icons ${thongke.penMore} `}>
                          create
                        </i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <MyModal isShowing={isShowing} title={isTitle} hide={toggle("BaoTruong")} />
    </div>
  );
};

export default TableTKTrip;
