import React from "react";
import "../css/Notification.css";
import { BsArrowRightShort } from "react-icons/bs";
const fontSize = {
  fontSize: "0.8em",
};
const Notification = () => {
  return (
    <div className="notif shadow-sm p-3">
      <h6 className="fw-bold text-capitalize m-0" style={fontSize}>
        Notifications
      </h6>
      <div className="d-flex justify-content-lg-between mt-2 ">
        <p style={{ fontSize: "0.7em ", fontWeight: "500" }} className="m-0">
          Activity
        </p>
        <span>...</span>
      </div>
      <div className="notif_inner mt-2">
        <div className="dotted"></div>

        {/* ======================== Notification 1 ========================== */}

        <div style={{ height: "20px", lineHeight: "20px" }}>
          <div className="row">
            <div className="col-1 mt-1">
              <div className="arrowIcon bg-primary border-0 text-white fw-bold">
                <BsArrowRightShort />
              </div>
            </div>
            <div className="col-2 ms-2 p-0  d-flex align-items-center ">
              <div style={{ fontSize: ".6em" }} className="fw-bold">
                10 Nov
              </div>
              <BsArrowRightShort className=" text-primary" />
            </div>

            <div className="col-8  ">
              <p style={{ fontSize: ".6em" }} className="m-0 ">
                Posted{" "}
                <span className="fw-bold">
                  Beautiful Day with Friends blog...
                </span>
                &nbsp;
                <a href="/#" className="text-decoration-none">
                  view
                </a>
              </p>
            </div>
          </div>

          {/* ===================== Notification 2 ===================== */}

          <div className="row mt-3">
            <div className="col-1 mt-1">
              <div className="arrowIcon bg-white fw-bold">
                <BsArrowRightShort />
              </div>
            </div>
            <div className="col-2 ms-2 p-0  d-flex  ">
              <div style={{ fontSize: ".6em" }} className="fw-bold">
                08 Nov
              </div>
              <BsArrowRightShort className=" text-primary mt-1" />
            </div>

            <div className="col-8  ">
              <p style={{ fontSize: ".6em" }} className="m-0 ">
                If several languages coalesce, the grammar of the resulting...
                &nbsp;
                <a href="/#" className="text-decoration-none">
                  Read
                </a>
              </p>
            </div>
          </div>

          {/* =========================Notification 3 ========================= */}
          <div className="row mt-2">
            <div className="col-1 mt-1">
              <div className="arrowIcon bg-white fw-bold">
                <BsArrowRightShort />
              </div>
            </div>
            <div className="col-2 ms-2 p-0  d-flex align-items-center ">
              <div style={{ fontSize: ".6em" }} className="fw-bold">
                02 Nov
              </div>
              <BsArrowRightShort className=" text-primary" />
            </div>

            <div className="col-8  ">
              <p style={{ fontSize: ".6em" }} className="m-0 ">
                Create <span className="fw-bold"> Drawing a sketch blog</span>
              </p>
            </div>
          </div>
          {/* ======================= Notification 4 =================== */}

          <div className="row mt-3">
            <div className="col-1 mt-1">
              <div className="arrowIcon bg-white fw-bold">
                <BsArrowRightShort />
              </div>
            </div>
            <div className="col-2 ms-2 p-0  d-flex  ">
              <div style={{ fontSize: ".6em" }} className="fw-bold">
                24 Oct
              </div>
              <BsArrowRightShort className=" text-primary mt-1" />
            </div>

            <div className="col-8  ">
              <p style={{ fontSize: ".6em" }} className="m-0 ">
                In enim justo, rhoncus ut, imperdiet a venenatis vitae
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-sm btn-primary  text-center "
          style={{ fontSize: "0.6em" }}
        >
          View more <BsArrowRightShort />
        </button>
      </div>
    </div>
  );
};

export default Notification;
