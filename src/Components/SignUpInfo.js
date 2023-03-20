import React from "react";
import RoleSelect from "../Components/RoleSelect";
import { HiOutlineUser, HiPhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

const SignUpInfo = () => {
  return (
    <form className="signUp-form">
      <div className="name-email">
        <div className="form-input-div">
          <div className="labelDiv">
            <label for="fullName" className="inpLabel">
              Enter your fullname
            </label>
            <p className="details">Details</p>
          </div>
          <div className="inpSignDiv-1">
            <input
              className="signUpInp userFullName"
              type="text"
              placeholder="Enter FullName..."
            />
            <HiOutlineUser className="userIcon" />
            <p className="inpDesc">
              Enter your full name without special character
            </p>
          </div>
        </div>
        <div className="form-input-div">
          <div className="labelDiv">
            <label for="email" className="inpLabel">
              Email Address
            </label>
            <p className="details">Details</p>
          </div>
          <div className="inpSignDiv-2">
            <input
              className="signUpInp"
              type="text"
              placeholder="Enter Correct Mail Address..."
            />
            <p className="inpDesc">Enter a valid email without space</p>
            <AiOutlineMail className="mailIcon" />
          </div>
        </div>
      </div>
      <div className="password-num">
        <div className="form-input-div">
          <div className="labelDiv">
            <label for="email" className="inpLabel">
              Password
            </label>
            <p className="details">Details</p>
          </div>
          <div className="inpSignDiv-3">
            <input
              className="signUpInp"
              type="password"
              placeholder="Enter Password..."
            />
            <p className="inpDesc">Enter a strong password</p>
            <BiShow className="showIcon" />
          </div>
        </div>
        <div className="form-input-div">
          <div className="labelDiv">
            <label for="email" className="inpLabel">
              Phone Number
            </label>
            <p className="details">Details</p>
          </div>
          <div className="inpSignDiv-4">
            <input
              className="signUpInp"
              type="text"
              placeholder="Enter Phone Number...e.g +234..."
            />
            <p className="inpDesc">Enter your phone number with country code</p>
            <HiPhone className="phoneIcon" />
          </div>
        </div>
      </div>
      <RoleSelect />
    </form>
  );
};

export default SignUpInfo;
