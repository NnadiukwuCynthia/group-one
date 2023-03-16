import React from "react";
import Studentprogress from "../Components/Studentprogress";
import TotalCourse from "../Components/TotalCourse";
import Lessons from "../Components/Lessons";

const Dashboard = () => {
  return (
    <>
      <section className="dashboardDiv">
        <div className="welcomeDiv">
          <p className="welcome">welcome back</p>
          <p className="userInfo">Adams chucks</p>
          <p className="taskLevel">your students completed 74% of the tasks</p>
        </div>
        <div className="AnalyseDIv">
          <Studentprogress />
          <div>
            <TotalCourse />
          </div>
          <div>
            <Lessons />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
