import React from "react";

const Studentprogress = ({ name, text, img }) => {
  return (
    <>
      <section className="eachProgress">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <div>
            <p>{name}</p>
            <p>{text}</p>
          </div>
          <div className="progress">
            <div className="progressLevel"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studentprogress;
