import React from "react";
import "../css/ProfileViews.css";
import img from "../img/graph.PNG";

const ProfileViews = () => {
  return (
    <div className="ProfileViews shadow-sm p-2 px-3">
      <div className="d-flex justify-content-lg-between ">
        <h6 style={{ fontSize: "0.9em" }}>Profile Views</h6>
        <div className="">
          <input type="" value="Jan" />
          <button>month</button>
        </div>
      </div>
      <div className="ProfileViewsLeft  d-flex justify-content-lg-between">
        <div>
          <p>This onth</p>
          <h4>1453</h4>
          <p className="mb-2">Last Month</p>
          <h6>2281</h6>
        </div>
        <img className="mt-3 img-fluid" src={img} alt="graph" />
      </div>
    </div>
  );
};

export default ProfileViews;
