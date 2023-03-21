import React from "react";
import PaymentList from "../Components/PaymentData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Menu from "../Components/Navbar/Menu";
import Admin from "../Components/Admin";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

const Payments = () => {
  return (
    <>
      <Admin />
      <div className="Page">
        <Menu />
        <div>
          <div className="courseCont-1">
            <div className="firstDiv">
              <p className="firstP">Home/</p>
              <p className="secondP">Payments</p>
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
          <div className="paymentDiv">
            {PaymentList.map((eachPayment, index) => {
              const {
                Name,
                Course,
                Invoice,
                Price,
                Status,
                Date,
                Dollar,
                Photo,
              } = eachPayment;
              return (
                <div key={index} className="eachPayment">
                  <div className="eachNameDiv">
                    <img src={Photo} alt={Name} />
                    <div className="infoDiv">
                      <p className="name">{Name}</p>
                      <p className="name">{Course}</p>
                      <p className="invoice">{Invoice}</p>
                    </div>
                  </div>
                  <div>
                    <div className="amountDiv">
                      {Dollar}
                      {Price}
                    </div>
                    <p className="statusDate">{Status}</p>
                    <p className="statusDate">{Date}</p>
                  </div>
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

export default Payments;
