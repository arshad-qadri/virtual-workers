import React from "react";
import "../css/WelcomeBack.css";
import img from "../img/social_girl.svg";
import { BsArrowRight } from "react-icons/bs";

const WelcomeBack = () => {
  return (
    <div className="welBack shadow-sm">
      <div className="svg">
        <img className="img-fluid svgImg" src={img} alt="svg" />
        <div className="text">
          <h5 className="text-primary">welcome back !</h5>
          <p className="text-primary">Workers Dashboard</p>
        </div>
        <img
          src="https://www.whatsappimages.in/wp-content/uploads/2021/03/Cute-Girl-Images-For-Whatsapp-Dp-Pics.jpg"
          alt="prfImg"
          className="prfImg img-fluid"
        />
      </div>
      <div className="WelBackDet d-flex justify-content-lg-around">
        <div className="name d-flex flex-lg-column ">
          <span className="fw-bold">Henry Price </span>
          <span>UI / UX Designer</span>
        </div>
        <div className="project d-flex flex-lg-column mt-2 ">
          <span className="fw-bold">125</span>
          <span>Projects</span>
          <button className="btn btn-sm btn-primary">
            View Profile <BsArrowRight />
          </button>
        </div>
        <div className="revenue d-flex flex-lg-column mt-2 me-4">
          <span className="fw-bold">$1245</span>
          <span className="mt-1">Revenue</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
