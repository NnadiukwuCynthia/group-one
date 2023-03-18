import React from "react";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const LoginRole = () => {
  return (
    <div>
      <div className="labelDiv-1">
        <label for="fullName" className="inpLabel">
          Role
        </label>
        <p className="details">Details</p>
      </div>
      <select className="SelectOption-1">
        <option className="options">Instructor</option>
        <option className="options">Admin</option>
        <option className="options">Super Admin</option>
      </select>
      <p className="inpDesc-1">Select your role to continue</p>
      <div className="logInBtn">
        <button>
          <Link to="/dashboard">
            <BiLogIn className="signUpIcon" />
            Log In
          </Link>
        </button>
      </div>
      <p className="toLogin-2">
        Don’t have an account! <Link to="/signup">Sign Up</Link>
      </p>
      <p className="toLogin-2">
        <Link to="/NewPassword">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default LoginRole;
