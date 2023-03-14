import React from "react";
import Smith from "../images/smith.png";
import Studentprogress from "../Components/Studentprogress";

const Dashboard = () => {
  return (
    <>
      <section>
        <div className="welcomeDiv">
          <p className="welcome">welcome back</p>
          <p className="userInfo">Adams chucks</p>
          <p className="taskLevel">your students completed 74% of the tasks</p>
        </div>
        <div>
          <div>
            <Studentprogress name="Smith Blacks" text="36%" img={Smith} />
            <div className="progress">
              <div className="progressLevel"></div>
            </div>
          </div>

          <Studentprogress />
          <Studentprogress />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
