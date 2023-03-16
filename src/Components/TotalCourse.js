import React from "react";
import "../index.css";
import { VscCircleSmall } from "react-icons/vsc";
import WorkStats from "./WorkStats";

const TotalCourse = () => {
  return (
    <>
      <section>
        <div className="Total">
          <div>
            <h3 className="total-course">Total Courses</h3>
            <h2 className="total-number">215</h2>
          </div>
          <div className="ViewBtn-1">
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
        <div className="Total">
          <div>
            <h3 className="total-student">Total Students</h3>
            <h2 className="total-number">1,759</h2>
          </div>
          <div className="ViewBtn-1">
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
        <div className="Total">
          <div>
            <h3 className="total-student">Total Lessons</h3>
            <h2 className="total-number">800</h2>
          </div>
          <div className="ViewBtn-1">
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
      </section>
      <WorkStats />
    </>
  );
};

export default TotalCourse;
