import React from "react";
import { BiLogIn } from "react-icons/bi";

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
            <BiLogIn className="signUpIcon" />
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default RoleSelect;
