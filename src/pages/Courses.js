import React from "react";
import CourseData from "../Components/CourseData";
// import "../../index.css";
import { FaDollarSign, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Menu from "../Components/Navbar/Menu";
import Admin from "../Components/Admin";

const Courses = () => {
  return (
    <>
      <Admin />
      <div className="Page">
        <Menu />
        <div>
          <div className="courseCont">
            <div className="firstDiv">
              <p className="firstP">Home/</p>
              <p className="secondP">Courses</p>
            </div>
            <div className="cheveronDiv">
              <div className="tinyDiv-1">
                <p>COURSE</p>
                <div>
                  <HiChevronUp className="Up-1" />
                  <HiChevronDown className="Up-1" />
                </div>
              </div>
              <div className="tinyDiv">
                <p>LEVEL</p>
                <div>
                  <HiChevronUp className="Up" />
                  <HiChevronDown className="Up" />
                </div>
              </div>
              <div className="tinyDiv">
                <p>DURATION</p>
                <div>
                  <HiChevronUp className="Up" />
                  <HiChevronDown className="Up" />
                </div>
              </div>
              <div className="tinyDiv">
                <p>ALL</p>
                <div>
                  <HiChevronUp className="Up" />
                  <HiChevronDown className="Up" />
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Courses;
