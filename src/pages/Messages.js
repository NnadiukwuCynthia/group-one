import React from "react";
import Message from "../Components/Messages";
import Smith from "../images/smithBig.png";
import { AiOutlineSend } from "react-icons/ai";
import Admin from "../Components/Admin";
import Menu from "../Components/Navbar/Menu";

const Messages = () => {
  return (
    <>
      <Admin />
      <div className="Page">
        <Menu />
        <section className="dashboardDiv">
          <div className="welcomeDiv">
            <h2 className="quizHeading">Messages</h2>
          </div>
          <div className="quizDiv">
            <Message />
            <div className="Messages-1">
              <div className="headingDiv">
                <img src={Smith} alt="profilePicture" />
                <p className="profileName">Smith Blacks</p>
              </div>
              <div className="messageBox-1"></div>
              <div className="box">
                <div className="messageBox-2"></div>
              </div>
              <div className="messageBox-3"></div>
              <input
                type="text"
                placeholder="Type your Message..."
                className="messageInp"
              />
              <AiOutlineSend className="sendIcon" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Messages;
