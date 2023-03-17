import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import WHiteLogo from "../images/Whitelogo.png";

const Welcome = () => {
  return (
    <>
      <section className="WelcomeScreen">
        <div className="logoDiv">
          <img src={WHiteLogo} alt="" />
        </div>
        <div className="welcomeSlide">
          <div className="welcomeTextDiv">
            <p className="welcomeHeadingText">Welcome</p>
            <p className="welcomeText">
              Get ready to explore the exciting world of technology and learn
              new skills that will help you shape your future.
            </p>
          </div>
          <div className="welcomeBtnDiv">
            <RiHome5Line className="homeIcon" />
            <button>
              <Link to="/signup">Let's Get Started</Link>
            </button>
            <p className="toLogin">
              Already have an account! <Link to="/logIn">Log in</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
