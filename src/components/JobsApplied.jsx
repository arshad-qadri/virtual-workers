import React from "react";
import "../css/Jobapplied.css";
import { CgToolbox } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
const fontSize = { fontSize: "1.3em" };

const JobsApplied = ({ title }) => {
  return (
    <div className="bg-white shadow-sm p-4 mt-3 jobApplied">
      <h6> {title} </h6>
      <div className="card mt-4">
        <div className="row p-3">
          <div className="col-auto ">
            <div className="clr clr1"></div>
          </div>
          <div className="col-9">
            <div className="details">
              <p
                className="m-0"
                style={{ fontSize: ".9em", fontWeight: "500" }}
              >
                Recruiting Coordinator
              </p>
              <div
                className="d-flex align-content-center mt-2"
                style={{ fontSize: ".6em", columnGap: "19px", color: "gray" }}
              >
                <div className="det1">
                  <CgToolbox style={fontSize} /> Catalyst
                </div>
                <div className="det2">
                  <IoLocationOutline style={fontSize} /> London,UK
                </div>
                <div className="det3">
                  <RiTimeLine style={fontSize} /> 11 hours ago
                </div>
                <div className="det4">
                  <GiMoneyStack style={fontSize} /> $35k - $45k
                </div>
              </div>
            </div>
            <div className="types mt-3">
              <div className="type text-primary">Full time</div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================= */}

      <div className="card mt-4">
        <div className="row p-3">
          <div className="col-auto ">
            <div className="clr clr2 "></div>
          </div>
          <div className="col-9">
            <div className="details">
              <p
                className="m-0"
                style={{ fontSize: ".9em", fontWeight: "500" }}
              >
                Senior Product Designer
              </p>
              <div
                className="d-flex align-content-center mt-2"
                style={{ fontSize: ".6em", columnGap: "19px", color: "gray" }}
              >
                <div className="det1">
                  <CgToolbox style={fontSize} /> Catalyst
                </div>
                <div className="det2">
                  <IoLocationOutline style={fontSize} /> London,UK
                </div>
                <div className="det3">
                  <RiTimeLine style={fontSize} /> 11 hours ago
                </div>
                <div className="det4">
                  <GiMoneyStack style={fontSize} /> $35k - $45k
                </div>
              </div>
            </div>
            <div className="types mt-3 d-flex ">
              <div className="type text-primary">Full time</div>
              <div className="type ms-3"> Private </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================== */}

      <div className="card mt-4">
        <div className="row p-3">
          <div className="col-auto ">
            <div className="clr clr3 "></div>
          </div>
          <div className="col-9">
            <div className="details">
              <p
                className="m-0"
                style={{ fontSize: ".9em", fontWeight: "500" }}
              >
                Software Engineer (Android), Libraries
              </p>
              <div
                className="d-flex align-content-center mt-2"
                style={{ fontSize: ".6em", columnGap: "19px", color: "gray" }}
              >
                <div className="det1">
                  <CgToolbox style={fontSize} /> Catalyst
                </div>
                <div className="det2">
                  <IoLocationOutline style={fontSize} /> London,UK
                </div>
                <div className="det3">
                  <RiTimeLine style={fontSize} /> 11 hours ago
                </div>
                <div className="det4">
                  <GiMoneyStack style={fontSize} /> $35k - $45k
                </div>
              </div>
            </div>
            <div className="types mt-3 d-flex ">
              <div className="type text-primary">Full time</div>
              <div className="type  ms-3"> Private </div>
              <div className="type  ms-3"> Urgent </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsApplied;
