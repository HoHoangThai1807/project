import React, { useState } from "react";
import "./StartCard.scss";

export default function StartCard(props) {
  const [startCard] = useState(props);
  return (
    <div
      className={`container-fluid start-card d-flex justify-content-between align-items-center ${startCard.cardStyle}`}
    >
      <div>
        <h3 className="title-start-card text-white">{startCard.title}</h3>
        <h4 className="value text-white">{startCard.value}</h4>
      </div>
      <div>
        <i className="material-icons icon-start-card text-white">{startCard.icon}</i>
      </div>
    </div>
  );
}
