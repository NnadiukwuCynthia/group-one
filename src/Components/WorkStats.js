import React from "react";

const WorkStats = () => {
  return (
    <>
      <section className="workStat">
        <p className="workStatTitle">Work Stats</p>
        <div className="Stat">
          <div className="eachStat">
            <p className="work">Lesson Discus</p>
            <p className="time">3.4hrs</p>
          </div>
          <div className="eachStat">
            <p className="work">Talking Class</p>
            <p className="time">4.5hrs</p>
          </div>
          <div className="eachStat">
            <p className="work">Work in Progress</p>
            <p className="time">918+23.45%</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkStats;
