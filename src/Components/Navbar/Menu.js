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
            <NavLink to="/dashboard" className="listItem">
              <HiOutlineSquares2X2 /> <span>Dashbord</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="listItem">
              <FaClipboardList /> <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" className="listItem">
              <FaGraduationCap />
              <span>Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/payment" className="listItem">
              <FaDollarSign /> <span>Payments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/quiz" className="listItem">
              <BiCopyAlt />
              <span>
                Quiz/
                <br />
                Assignment
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" className="listItem">
              <AiFillMessage /> <span>Messages</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
