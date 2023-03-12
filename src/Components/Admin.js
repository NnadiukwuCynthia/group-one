import React from "react";
import BlueLogo from "../images/Juniors B.png";
import User from "../images/Adam.png";
import "../index.css";
import { TbMessageDots } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

const Admin = () => {
  return (
    <>
      <div className="adminDiv">
        <div>
          <img src={BlueLogo} alt="logo" className="logo" />
        </div>
        <div className="userContent">
          <input type="search" placeholder="Search" className="searchInp" />
          <TbMessageDots className="menuIcon" />
          <BsBell className="notify" />
          <div className="UserDiv">
            <div className="imgDiv">
              <img src={User} alt="user" />
            </div>
            <div className="userInfo">
              <p className="userName">Adams Chuks</p>
              <p className="userRole">Super Admin</p>
            </div>
            <CiSettings className="menuIcon setting" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
