import React, { Component } from "react";

import { CardHeader } from "shards-react";
import { PieChart, Pie, Cell } from "recharts";
import chartDS from "./chart.module.scss";
import { DropdownButton, Dropdown } from "react-bootstrap";

const data = [{ name: "Group A", value: 400 }, { name: "Group B", value: 300 }];

const COLORS = ["#00C49F", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
  //   index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class ChartDS extends Component {
  render() {
    return (
      <div className={`card`}>
        <CardHeader className="border-bottom">
          <h6 className={`m-0 `}>Biểu Biểu Đồ Doanh Số</h6>
        </CardHeader>
        <div>
          <DropdownButton
            className={chartDS.btnDropdown}
            id="dropdown-basic-button"
            title="Thống Kê Theo"
          >
            <Dropdown.Item href="#/action-1">Day</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Week</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Month</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Year</Dropdown.Item>
          </DropdownButton>
        </div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  }
}
export default ChartDS;
