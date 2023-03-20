import React from "react";
import UpcomingLessons from "./UpcomingLessons";

const Lessons = () => {
  return (
    <>
      <p className="upcoming">Upcoming Lessons</p>
      <UpcomingLessons course="UI/UX Disign thinking" time="12:30am-1:15pm" />
      <UpcomingLessons course="UI Motion Fundamentals" time="1:35pm-2:15pm" />
      <UpcomingLessons
        course="Web Development Fundamentals"
        time="2:30pm-2:45pm"
      />
      <UpcomingLessons
        course="User Research Methodologies"
        time="4:15pm-4:30pm"
      />
    </>
  );
};

export default Lessons;
