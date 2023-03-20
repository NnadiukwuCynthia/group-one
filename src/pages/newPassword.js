import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Juniors B.png";
import { AiOutlineMail } from "react-icons/ai";
import { HiArrowPath } from "react-icons/hi2";

const newPassword = () => {
  return (
    <>
      <main className="newPasswordPage">
        <form className="newPasswordForm">
          <div class="logoDiv-1">
            <img src={Logo} alt="" />
          </div>
          <p className="emailRecoveryText">
            An email with password reset link will be sent to you registered
            email address. If it exists on our system.
          </p>
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
                placeholder="enter your mail..."
              />
              <p className="inpDesc">Enter your valid email address</p>
              <AiOutlineMail className="mailIcon-2" />
            </div>
          </div>
          <div className="logInBtn">
            <button>
              <Link to="/logIn">
                <HiArrowPath className="signUpIcon" />
                Reset
              </Link>
            </button>
          </div>
          <p className="toLogin-2">
            Don’t have an account! <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default newPassword;
