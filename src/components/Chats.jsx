import React from "react";
import "../css/chat.css";
import {
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineFileImage,
  AiOutlineFileText,
} from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";

const fontSize = {
  fontSize: "0.8em",
};

const Chats = () => {
  return (
    <div className="chat shadow-sm">
      <div className="top d-flex justify-content-lg-between px-3 pt-3 ">
        <div className="user">
          <h6 className="fw-bold m-0" style={fontSize}>
            Steven Franklin
          </h6>
          <p className="m-0 mt-1 ms-2" style={{ fontSize: ".7em" }}>
            Active Now
          </p>
        </div>
        <div className="d-flex">
          <div className="cIcon">
            <AiOutlineSearch />
          </div>
          <div className="cIcon">
            <AiOutlineSetting />
          </div>
          <div className="cIcon">
            <span className="mb-3">...</span>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "1px" }} />
      <div className="d-flex justify-content-lg-between px-3">
        <div className="today"></div>
        <span style={{ fontSize: ".8em", marginTop: "-10px" }}>Today</span>
        <div className="today"></div>
      </div>

      {/* ====================chat1=========================== */}
      <div className=" px-3">
        <div className="chat1 p-2">
          <div className="d-flex flex-column dots1">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <h6 className="text-primary" style={{ fontSize: ".6em" }}>
            Steven Franklin
          </h6>
          <p className=" m-0" style={{ fontSize: ".6em" }}>
            Hello!
          </p>
          <p className="mt-2" style={{ fontSize: ".6em" }}>
            <BiTimeFive />
            10:00
          </p>
        </div>
      </div>

      {/* ===============chat 2 =============================== */}
      <div className=" px-3">
        <div className="chat2 p-2">
          <div className="d-flex flex-column dots2">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <h6 className="text-primary" style={{ fontSize: ".6em" }}>
            Steven Franklin
          </h6>
          <p className=" m-0" style={{ fontSize: ".6em" }}>
            Hi, How are you? What about our next meeting?
          </p>
          <p className="mt-2" style={{ fontSize: ".6em" }}>
            <BiTimeFive />
            10:00
          </p>
        </div>
      </div>
      <hr style={{ marginTop: "6em" }} />
      <div
        className="chatIpn d-flex justify-content-between align-content-center px-3 "
        style={{ marginTop: "-5px" }}
      >
        <div className="emojis">
          <GrEmoji className="emoji" />
          <AiOutlineFileImage className="emoji" />
          <AiOutlineFileText className="emoji" />
        </div>
        <input type="text" placeholder="Enter message..." />
        <button className="btn btn-primary btn-sm">
          Send <MdSend />
        </button>
      </div>
    </div>
  );
};

export default Chats;
