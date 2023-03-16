import React from "react";
import "../index.css";
import Smith from "../images/smith.png";
import Adeola from "../images/Adeola.png";
import Ying from "../images/Ying.png";
import Tailor from "../images/Tailor.png";
import { VscCircleSmall } from "react-icons/vsc";

const Studentprogress = ({ img }) => {
  return (
    <>
      <section className="eachProgress">
        <p className="progressText">Student's Progress</p>
        <div className="studentProgress">
          <div>
            <img src={Smith} alt="" />
          </div>
          <div className="flexDiv">
            <div className="nameDiv">
              <p>Smith Blacks</p>
              <p>36%</p>
            </div>
            <div className="progress">
              <div className="progressLevel"></div>
            </div>
          </div>
        </div>
        <div className="studentProgress">
          <div>
            <img src={Adeola} alt="" />
          </div>
          <div className="flexDiv">
            <div className="nameDiv">
              <p>Adeola Bats</p>
              <p>65%</p>
            </div>
            <div className="progress">
              <div className="AdeolaprogressLevel"></div>
            </div>
          </div>
        </div>
        <div className="studentProgress">
          <div>
            <img src={Ying} alt="" />
          </div>
          <div className="flexDiv">
            <div className="nameDiv">
              <p>Ying Toms</p>
              <p>24%</p>
            </div>
            <div className="progress">
              <div className="YingprogressLevel"></div>
            </div>
          </div>
        </div>
        <div className="studentProgress">
          <div>
            <img src={Tailor} alt="" />
          </div>
          <div className="flexDiv">
            <div className="nameDiv">
              <p>Tailor Hing</p>
              <p>72%</p>
            </div>
            <div className="progress">
              <div className="TailorprogressLevel"></div>
            </div>
          </div>
        </div>
        <div className="studentProgress">
          <div>
            <img src={Smith} alt="" />
          </div>
          <div className="flexDiv">
            <div className="nameDiv">
              <p>Smith Blacks</p>
              <p>45%</p>
            </div>
            <div className="progress">
              <div className="SmithBlackprogress"></div>
            </div>
          </div>
        </div>
        <div className="studentProgress">
          <div>
            <img src={Smith} alt="" />
          </div>
          <div className="flexDiv">
            <div className="nameDiv">
              <p>Smith Blacks</p>
              <p>16%</p>
            </div>
            <div className="progress">
              <div className="blacksprogress"></div>
            </div>
          </div>
        </div>
        <div className="ViewBtn">
          <button>
            <div className="btnIconDiv">
              <VscCircleSmall className="icon1" />
              <VscCircleSmall className="icon2" />
              <VscCircleSmall className="icon3" />
            </div>
            View All
          </button>
        </div>
      </section>
    </>
  );
};

export default Studentprogress;
