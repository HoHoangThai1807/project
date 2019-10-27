import React, { useState } from "react";
import "./RightCard.scss";

export default function RightCard(props) {
  const [rightCard] = useState(props);
  return (
    <div className="text-center card mb-4 right-card d-flex justify-content-center ">
      <div>
        <i className="material-icons icon-right-card">{rightCard.icon}</i>
        <h3 className="title-start-card">{rightCard.title}</h3>
        <h4 className="value text-danger">{rightCard.value} %</h4>
      </div>
    </div>
  );
}
