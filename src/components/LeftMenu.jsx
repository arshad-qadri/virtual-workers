import React from "react";
import "../css/leftMenu.css";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlineLayout, AiOutlineStar } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { CgToolbox } from "react-icons/cg";
import { VscSearch } from "react-icons/vsc";
import { BiMessage } from "react-icons/bi";
import { TiBusinessCard } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { ImList } from "react-icons/im";

const LeftMenu = () => {
  return (
    <>
      <div className="leftmenu ">
        <li className="text-center list-unstyled mt-3 ">
          <a href="/#" className="text-decoration-none text-white fw-bold logo">
            VirtualWorkers.pH
          </a>
        </li>
        <div className="menu ">
          <p className="text-uppercase mt-3 mx-4">menu</p>

          <ul>
            <li className="nav-item list-unstyled">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/#"
              >
                <RiHome2Line className="icons" /> {""} Dashboard
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                <AiOutlineLayout className="icons" /> My Profile
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                <FaUserFriends className="icons" /> My Network
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                All Connections
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                Connection Requests
                <span
                  className="bg-primary text-white rounded-circle px-1"
                  style={{ marginLeft: 5, fontSize: "0.8em" }}
                >
                  08
                </span>
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                <CgToolbox className="icons" /> Resume Manager
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                Resume Sent Outs
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                References Management
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                <VscSearch className="icons" /> Jobs
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                Search Job
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                Jobs Management
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                Jobs Referrals
                <span
                  className="bg-primary text-white rounded-circle px-1 mx-1"
                  style={{ marginLeft: 5, fontSize: "0.8em" }}
                >
                  08
                </span>
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                <BiMessage className="icons" /> Messages and Chat
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                <AiOutlineStar className="icons" /> Your Rewards
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                <ImList className="icons" /> Desktop App
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                <TiBusinessCard className="icons" /> Billing
              </a>
            </li>
            <li className="nav-item list-unstyled">
              <a className="nav-link " aria-current="page" href="/#">
                <FiSettings className="icons" /> Administration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
