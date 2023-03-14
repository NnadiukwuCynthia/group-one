import React from "react";
import Smith from "../images/smith.png";
import Studentprogress from "../Components/Studentprogress";
import HeaderBar from "../Components/HeaderBar";

const Dashboard = () => {
  return (
    <>
      <HeaderBar />
      <section>
        <div className="welcomeDiv">
          <p className="welcome">welcome back</p>
          <p className="userInfo">Adams chucks</p>
          <p className="taskLevel">your students completed 74% of the tasks</p>
        </div>
        <div>
          <Studentprogress name="Smith Blacks" text="36%" img={Smith} />
          <Studentprogress />
          <Studentprogress />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
