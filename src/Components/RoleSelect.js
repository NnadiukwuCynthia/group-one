import React from "react";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const RoleSelect = () => {
  return (
    <>
      <div>
        <div className="labelDiv-2">
          <label for="fullName" className="inpLabel">
            Role
          </label>
          <p className="details">Details</p>
        </div>
        <select className="SelectOption">
          <option className="options">Instructor</option>
          <option className="options">Admin</option>
          <option className="options">Super Admin</option>
        </select>
        <p className="inpDesc-1">Select your role</p>
        <div className="signUpBtn">
          <button>
            <Link to="/dashboard">
              <BiLogIn className="signUpIcon" />
              Sign Up
            </Link>
          </button>
        </div>
        <p className="toLogin-2">
          Already have an account! <Link to="/logIn">Log in</Link>
        </p>
      </div>
    </>
  );
};

export default RoleSelect;
