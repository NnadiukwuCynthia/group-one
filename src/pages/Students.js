import React from "react";
import Admin from "../Components/Admin";
import Menu from "../Components/Navbar/Menu";
import TableData from "../Components/TableData";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Students = () => {
  return (
    <>
      <Admin />
      <div className="Page">
        <Menu />
        <div className="studentDiv">
          <div className="courseCont">
            <div className="firstDiv">
              <p className="firstP">Home/</p>
              <p className="secondP">Students</p>
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
          <TableData />
        </div>
      </div>
    </>
  );
};

export default Students;
