import React from "react";
import Logo from "../images/Juniors B.png";
import { AiOutlineMail } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import LoginRole from "./LoginRole";

const LogInForm = () => {
  return (
    <>
      <section className="logInFormPart">
        <form className="logIn-form">
          <div className="logoDiv-1">
            <img src={Logo} alt="" />
          </div>
          <div>
            <div>
              <div className="labelDiv-1">
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
                <p className="inpDesc">Enter your valid email address</p>
                <AiOutlineMail className="mailIcon-1" />
              </div>
            </div>
            <div>
              <div className="labelDiv-1">
                <label for="email" className="inpLabel">
                  Password
                </label>
                <p className="details">Details</p>
              </div>
              <div className="inpSignDiv-3">
                <input
                  className="signUpInp"
                  type="text"
                  placeholder="Enter Password..."
                />
                <p className="inpDesc">Enter a strong password</p>
                <BiShow className="showIcon-1" />
              </div>
            </div>
          </div>
          <LoginRole />
        </form>
      </section>
    </>
  );
};

export default LogInForm;
