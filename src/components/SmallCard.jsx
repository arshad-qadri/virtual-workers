import React from "react";
import "../css/smallCard.css";

const SmallCard = props => {
  return (
    <div className="shadow-sm bg-white smCard d-flex justify-content-around align-items-center">
      <div>
        <p className="my-1">{props.name} </p>
        <span className="fw-bold mt-1 ">{props.num} </span>
      </div>
      <span className="bg-primary rounded-circle smCardIcon ">
        {props.icon}
      </span>
    </div>
  );
};

export default SmallCard;
