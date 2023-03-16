import React from "react";
import { VscCircleSmall } from "react-icons/vsc";
import { BsBell } from "react-icons/bs";
import Smith from "../images/smith.png";

const Message = () => {
  return (
    <div className="Messages">
      <div className="SumMessages">
        <div className="allMessageDiv">
          <p className="allMessages">All Messages</p>
          <p className="totalMessages">24</p>
        </div>
        <div className="MessageBtn">
          <button>
            <div className="btnIconDiv">
              <VscCircleSmall className="icon1" />
              <VscCircleSmall className="icon2" />
              <VscCircleSmall className="icon3" />
            </div>
            Mark all as read
          </button>
        </div>
      </div>
      <div className="messageNotification">
        <p className="messageText">Messages</p>
        <div className="firstMessage">
          <img src={Smith} alt="smith" />
          <div className="name-icon-div">
            <p className="messagerName">Smith Blacks</p>
            <div className="messageIconDiv">
              <BsBell className="messagerIcon" />
              <div className="alertNo">
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherMessages">
          <img src={Smith} alt="smith" />
          <div className="name-icon-div">
            <p className="messagerName">Adeola Bats</p>
            <div className="messageIconDiv">
              <BsBell className="messagerIcon" />
              <div className="alertNo">
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherMessages">
          <img src={Smith} alt="smith" />
          <div className="name-icon-div">
            <p className="messagerName">Ying Toms</p>
            <div className="messageIconDiv">
              <BsBell className="messagerIcon" />
              <div className="alertNo">
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherMessages">
          <img src={Smith} alt="smith" />
          <div className="name-icon-div">
            <p className="messagerName">Tailor Hings</p>
            <div className="messageIconDiv">
              <BsBell className="messagerIcon" />
              <div className="alertNo">
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherMessages">
          <img src={Smith} alt="smith" />
          <div className="name-icon-div">
            <p className="messagerName">Smith Blacks</p>
            <div className="messageIconDiv">
              <BsBell className="messagerIcon" />
              <div className="alertNo">
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MessagesBtn">
        <button>
          <div className="btnIconDiv">
            <VscCircleSmall className="icon1" />
            <VscCircleSmall className="icon2" />
            <VscCircleSmall className="icon3" />
          </div>
          View All
        </button>
      </div>
    </div>
  );
};

export default Message;
