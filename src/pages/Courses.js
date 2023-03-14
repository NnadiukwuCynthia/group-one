import React from "react";
import HeaderBar from "../Components/HeaderBar";
import CourseData from "../Components/CourseData";
import "../index.css";
import { FaDollarSign, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Courses = () => {
  return (
    <>
      <HeaderBar />
      <div className="courseDiv">
        {CourseData.map((eachCourse, index) => {
          const { Photo, Course, Date, Price, Level, Duration, Modules } =
            eachCourse;
          return (
            <div key={index} className="eachCourse">
              <img src={Photo} alt={Course} />
              <h4 className="course">{Course}</h4>
              <p className="date">{Date}</p>
              <div className="priceDiv">
                <p className="price">
                  {Price}
                  <FaDollarSign className="dollar" />
                  1050
                </p>
                <p className="level">{Level}Beginner</p>
                <p className="Duration">{Duration} 6 weeks</p>
              </div>
              <p className="modules">{Modules}</p>
            </div>
          );
        })}
      </div>
      <div className="btnDiv">
        <FaChevronLeft className="prevIcon" />
        <p>Prev</p>
        <div>
          <button className="first">1</button>
          <button className="second">2</button>
        </div>
        <p>Next</p>
        <FaChevronRight className="nextIcon" />
      </div>
    </>
  );
};

export default Courses;
