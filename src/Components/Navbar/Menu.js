import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaClipboardList, FaGraduationCap, FaDollarSign } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BiCopyAlt } from "react-icons/bi";

const Menu = () => {
  return (
    <>
      <div className="MenuDiv">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className="listItem"
              activeclassName="active"
            >
              <HiOutlineSquares2X2 /> <span>Dashbord</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className="listItem"
              activeclassName="active"
            >
              <FaClipboardList /> <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students"
              className="listItem"
              activeclassName="active"
            >
              <FaGraduationCap />
              <span>Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payment"
              className="listItem"
              activeclassName="active"
            >
              <FaDollarSign /> <span>Payments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/quiz" className="listItem" activeclassName="active">
              <BiCopyAlt />
              <span>
                Quiz/
                <br />
                Assignment
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className="listItem"
              activeclassName="active"
            >
              <AiFillMessage /> <span>Messages</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
