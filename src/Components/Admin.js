import React from "react";
import BlueLogo from "../images/Juniors B.png";
import User from "../images/Adam.png";
import "../index.css";
import { TbMessageDots } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const Admin = () => {
  return (
    <>
      <div className="adminDiv">
        <div>
          <Link to="/welcome">
            <img src={BlueLogo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="userContent">
          <FiSearch className="searchIcon" />
          <input type="search" placeholder="Search" className="searchInp" />
          <div>
            <TbMessageDots className="menuIcon" />
            <div className="greenDiv">5</div>
          </div>
          <div>
            <BsBell className="notify" />
            <div className="redDiv">3</div>
          </div>
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
