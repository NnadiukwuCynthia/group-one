import React from "react";
import PaymentList from "../Components/PaymentData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Payments = () => {
  return (
    <>
      <div className="paymentDiv">
        {PaymentList.map((eachPayment, index) => {
          const { Name, Course, Invoice, Price, Status, Date, Dollar, Photo } =
            eachPayment;
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
    </>
  );
};

export default Payments;
