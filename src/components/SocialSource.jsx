import React from "react";
import "../css/SocialSource.css";
import { SiFacebook } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrTwitter } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";

const SocialSource = () => {
  return (
    <div className="SocialSource shadow-sm p-3 ">
      <h6 className="fw-bold text-capitalize " style={{ fontSize: "0.8em" }}>
        social source
      </h6>
      <div className="face d-flex justify-content-center align-items-center mx-auto mt-1">
        <SiFacebook className="text-primary " />
      </div>
      <div className="text-center">
        <span className="fw-bold " style={{ fontSize: ".8em" }}>
          Facebook -
        </span>
        <span style={{ fontSize: ".8em", color: "gray" }}>125 sales</span>
        <p className="m-0 mt-2" style={{ fontSize: ".7em", color: "gray" }}>
          Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
          libero venenatis faucibus tincidunt.
        </p>
        <a
          className="text-decoration-none"
          href="/#"
          style={{ fontSize: ".8em" }}
        >
          Learn more
          <MdKeyboardArrowRight />
        </a>
      </div>
      <div className="socialIcon d-flex justify-content-around align-items-center text-center mt-4">
        <div className="icons">
          <div className="icon mx-auto ">
            <SiFacebook className="text-white " style={{ fontSize: ".8em" }} />
          </div>
          <h6 className="fw-bold m-0 mt-2" style={{ fontSize: ".7em" }}>
            Facebook
          </h6>
          <span style={{ fontSize: ".7em", color: "gray" }}>125 sales</span>
        </div>
        <div className="icons">
          <div className="icon mx-auto">
            <GrTwitter className="text-white " style={{ fontSize: ".8em" }} />
          </div>
          <h6 className="fw-bold m-0 mt-2" style={{ fontSize: ".7em" }}>
            Twitter
          </h6>
          <span style={{ fontSize: ".7em", color: "gray" }}>112 sales</span>
        </div>
        <div className="icons">
          <div className="icon mx-auto">
            <SiInstagram className="text-white" style={{ fontSize: ".8em" }} />
          </div>
          <h6 className="fw-bold m-0 mt-2" style={{ fontSize: ".7em" }}>
            Instagram
          </h6>
          <span style={{ fontSize: ".7em", color: "gray" }}>104 sales</span>
        </div>
      </div>
    </div>
  );
};

export default SocialSource;
