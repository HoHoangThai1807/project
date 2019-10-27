import React, { Component, useEffect } from "react";

import {Modaly } from './Modal.js';
import { Card, CardHeader, CardBody } from "shards-react";
import fetchPassengers from '../../actions/PassengerAction';

import {connect} from 'react-redux';


const ListPassenger = ({passengers, fetchPassengers}) => {

  useEffect(() => {
     fetchPassengers();
  },[passengers])
  

    return (
      <Card small className="mb-4 overflow-hidden">
        <CardHeader>
          <h6 className="m-0">Hành khách</h6>
        </CardHeader>
        <CardBody className=" p-0 pb-3">
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
              {passengers.map((passenger,i) => {
                  return (
                    <tr key={i}>
                    <td style={{ textAlign: "center" }}>{i+1}</td>
                    <td style={{ textAlign: "center" }}>{passenger.Fullname}</td>
                    <td style={{ textAlign: "center" }}>{passenger.phone_number}</td>
                    <td style={{ textAlign: "center" }}>{passenger.email}}</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                      }}
                    >
                      <Modaly />
                    </td>
                  </tr>
                  )
              }) }

            </tbody>
          </table>
        </CardBody>
      </Card>
    );
  }


const mapStatetoProps =(state) => {
    return{
        passengers : state.passengers,

    }
}

export default connect(mapStatetoProps,{fetchPassengers})(ListPassenger);

