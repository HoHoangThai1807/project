import React from "react";
import { Container, Row, Col, CardHeader, Card, CardBody } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import StartCard from "./components/start-card/StartCard";
import RightCard from "./components/right-card/RightCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000
  },
  {
    name: "Page B",
    uv: 3000
  },
  {
    name: "Page C",
    uv: 2000
  },
  {
    name: "Page D",
    uv: 2780
  },
  {
    name: "Page E",
    uv: 1890
  },
  {
    name: "Page F",
    uv: 2390
  },
  {
    name: "Page G",
    uv: 3490
  }
];

const Dashboard = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle
        title="Dashboard"
        subtitle="Overview"
        md="12"
        className="ml-sm-auto mr-sm-auto"
      />
    </Row>
    <Row>
      <Col lg="6">
        <StartCard
          title="Tài xế mới"
          value="1212321"
          cardStyle="card-1"
          icon="group_add"
        />
      </Col>
      <Col lg="6">
        <StartCard
          title="Cuốc hoàn thành"
          value="321321"
          cardStyle="card-2"
          icon="done"
        />
      </Col>
    </Row>

    <Row className="mt-4 mb-4">
      <Col lg="8">
        <div className="card">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Biểu đồ</h6>
          </CardHeader>
          <ResponsiveContainer width="100%" height={450}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffbfcb" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ffbfcb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#ffbfcb"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Col>
      <Col lg="4">
        <Row>
          <Col lg="12">
            {" "}
            <RightCard title="Tỷ lệ tăng - giảm" value="65" icon="bar_chart" />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            {" "}
            <RightCard
              title="Tỷ lệ hủy chuyến"
              value="12"
              icon="cancel_presentation"
            />
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h3 className="m-0">Top tài xế</h3>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Tên tài xế
                  </th>
                  <th scope="col" className="border-0">
                    Hoàn thành
                  </th>
                  <th scope="col" className="border-0">
                    Hủy
                  </th>
                  <th scope="col" className="border-0 text-right">
                    Tổng cộng
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>123</td>
                  <td>45</td>
                  <td className="text-right">168</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>123</td>
                  <td>45</td>
                  <td className="text-right">168</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>123</td>
                  <td>45</td>
                  <td className="text-right">168</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>123</td>
                  <td>45</td>
                  <td className="text-right">168</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>123</td>
                  <td>45</td>
                  <td className="text-right">168</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
