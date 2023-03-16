import React from "react";
import Ellipse1 from "../images/Ellipse 243.png";
import Ellipse2 from "../images/Ellipse 244.png";
import Ellipse3 from "../images/Ellipse 245.png";
import Ellipse4 from "../images/Ellipse 246.png";
import Ellipse5 from "../images/Ellipse 247.png";

const UpcomingLessons = ({ course, time }) => {
  return (
    <>
      <section>
        <article className="eachArticle">
          <p className="lessonCourse">{course}</p>
          <p className="lessonTime">{time}</p>
          <div className="LessonImg">
            <img src={Ellipse1} alt="" className="img-1" />
            <img src={Ellipse2} alt="" className="img-2" />
            <img src={Ellipse3} alt="" className="img-3" />
            <img src={Ellipse4} alt="" className="img-4" />
            <img src={Ellipse5} alt="" className="img-5" />
          </div>
        </article>
      </section>
    </>
  );
};

export default UpcomingLessons;
