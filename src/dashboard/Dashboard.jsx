import React from "react";
import LeftMenu from "../components/LeftMenu";
import TopMenu from "../components/TopMenu";
import WelcomeBack from "../components/WelcomeBack";
import ProfileCompleted from "../components/ProfileCompleted";
import "../css/dashboard.css";
import SmallCard from "../components/SmallCard";
import { FaUserFriends, FaBullhorn } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { CgToolbox } from "react-icons/cg";
import { BiMessage } from "react-icons/bi";
import ProfileViews from "../components/ProfileViews";
import SocialSource from "../components/SocialSource";
import Notification from "../components/Notification";
import Chats from "../components/Chats";
import JobsApplied from "../components/JobsApplied";

const Dashboard = () => {
  return (
    <div className="dashboard overflow-hidden">
      {/*================= left side menu ================= */}
      <LeftMenu />
      <div style={{ background: "#e2e2e2" }}>
        {/*================= top menu ================= */}
        <TopMenu />
        <div
          className="d-flex justify-content-lg-between px-5 mx-lg-5 mt-5 "
          style={{ fontSize: "0.9em" }}
        >
          <p className="text-uppercase fw-bold">dashboard</p>
          <p className="text-capitalize">dashboard</p>
        </div>

        <div className="container mt-2">
          <div className="row">
            <div className="col-4">
              <WelcomeBack />
              <ProfileCompleted />
            </div>
            {/* ========================= utilities ======================== */}
            <div className="col-8">
              <div className=" w-100 d-flex justify-content-around  ">
                <SmallCard
                  name="Your Network"
                  num="1,693"
                  icon={<FaUserFriends className="text-white" />}
                />
                <SmallCard
                  name="Shortlisted Jobs"
                  num="1,693"
                  icon={<FiEdit className="text-white" />}
                />
                <SmallCard
                  name="Applied Jobs"
                  num="1,693"
                  icon={<CgToolbox className="text-white" />}
                />
                <SmallCard
                  name="Job Alerts"
                  num="693"
                  icon={<FaBullhorn className="text-white" />}
                />
                <SmallCard
                  name="Messages"
                  num="1,693"
                  icon={<BiMessage className="text-white" />}
                />
              </div>
              <ProfileViews />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <SocialSource />
            </div>
            <div className="col-4">
              <Notification />
            </div>
            <div
              className="col-4"
              style={{ marginRight: "10px", width: "368px" }}
            >
              <Chats />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-2">
            <div className="col-6">
              <JobsApplied title="Jobs Applied Recently" />
            </div>
            <div className="col-6">
              <JobsApplied title="Your Refrees" />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <JobsApplied title="Your Job Referals Received" />
            </div>
            <div className="col-6">
              <JobsApplied title="Job Referals Sent" />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
