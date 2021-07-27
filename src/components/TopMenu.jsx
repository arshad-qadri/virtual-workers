import React from "react";
import "../css/topMenu.css";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdCropFree } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const TopMenu = () => {
  return (
    <div
      className="d-flex topMenu align-items-center justify-content-lg-between shadow-sm "
      style={{ width: "100%" }}
    >
      <div className="d-flex align-items-center">
        <FaBars className="ms-3" />
        <div className="search">
          <form className="d-flex">
            <input
              className="form-control me-2 bg-bg-light"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <BiSearchAlt className="searchIcon " />
          </form>
        </div>
        <div className="megaMenu ms-2" style={{ fontSize: ".8em" }}>
          Mega Menu
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="topRight d-flex align-items-center justify-content-lg-around">
        <img
          className="img-fluid"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Us_flag_large_38_stars.png/1200px-Us_flag_large_38_stars.png"
          alt="flag"
        />
        <AiOutlineAppstoreAdd className="topRicon" />
        <MdCropFree className="topRicon" />
        <div className="notification">
          <BsBell className="topRicon" />
          <span className="bg-danger">3</span>
        </div>
        <div className="profile d-flex align-items-center">
          <img
            className="rounded-circle"
            style={{ width: "25px", height: "25px", objectFit: "cover" }}
            src="https://www.whatsappimages.in/wp-content/uploads/2021/03/Cute-Girl-Images-For-Whatsapp-Dp-Pics.jpg"
            alt="profile"
          />
          &nbsp;
          <div className="name" style={{ fontSize: ".8em" }}>
            Henry
            <MdKeyboardArrowDown />
          </div>
        </div>

        <FiSettings className="me-5 topRicon" />
      </div>
    </div>
  );
};

export default TopMenu;
