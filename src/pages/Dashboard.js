import React from "react";
import Studentprogress from "../Components/Studentprogress";
import TotalCourse from "../Components/TotalCourse";
import Lessons from "../Components/Lessons";
import Menu from "../Components/Navbar/Menu";
import Admin from "../Components/Admin";
import Calendar from "../Components/calendar";
import BarChart from "../Components/Barchat";

const Dashboard = () => {
  return (
    <>
      <Admin />
      <div className="Page">
        <Menu />
        <section className="dashboardDiv">
          <div className="welcomeDiv">
            <p className="welcome">welcome back</p>
            <p className="userInfo">Adams chucks</p>
            <p className="taskLevel">
              your students completed 74% of the tasks
            </p>
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
          <div className="AnalyseDIv">
            <BarChart />
            <Calendar />
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
