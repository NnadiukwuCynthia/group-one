import React from "react";
import SignUpInfo from "../Components/SignUpInfo";
import WHiteLogo from "../images/Whitelogo.png";

const Signup = () => {
  return (
    <>
      <section className="Sign-in-page">
        <div className="logoDiv">
          <img src={WHiteLogo} alt="" />
        </div>
        <div>
          <SignUpInfo />
        </div>
      </section>
    </>
  );
};

export default Signup;
