import React from "react";
// import "../../index.css";
import { VscCircleSmall } from "react-icons/vsc";
import Admin from "../Components/Admin";
import Menu from "../Components/Navbar/Menu";

const Quiz = () => {
  return (
    <>
      <Admin />
      <div className="Page">
        <Menu />
        <section className="dashboardDiv">
          <div className="welcomeDiv">
            <h2 className="quizHeading">Quiz/Assignment</h2>
          </div>
          <div className="quizDiv">
            <div className="Quiz-Assignment">
              <p className="AssignmentText">Assignments</p>
              <div className="AssignmentContent">
                <div className="eachAssignment">
                  <p className="Assignment">
                    Redesign Your Favourite Application
                  </p>
                  <p className="toSubmit">submissions</p>
                  <p className="Score">200</p>
                </div>
                <div className="eachAssignment">
                  <p className="Assignment">
                    Wireframe Your Favourite Application
                  </p>
                  <p className="toSubmit">submissions</p>
                  <p className="Score">300</p>
                </div>
                <div className="eachAssignment">
                  <p className="Assignment">Do Your Research Design Thinking</p>
                  <p className="toSubmit">submissions</p>
                  <p className="Score">1,700</p>
                </div>
                <div className="eachAssignment">
                  <p className="Assignment">Read Up on Ideation</p>
                  <p className="toSubmit">submissions</p>
                  <p className="Score">1,750</p>
                </div>
              </div>
              <div className="AssignmentBtn">
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
            <div className="Quiz-Assignment">
              <p className="AssignmentText">Quizes</p>
              <div className="quizRecordDiv">
                <p className="quizRecord">No Quizes Recorded Yet</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Quiz;
