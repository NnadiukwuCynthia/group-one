import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Courses from "../pages/courses";
import Messages from "../pages/messages";
import Payments from "../pages/payments";
import Quiz from "../pages/quiz";
import Students from "../pages/students";
// import Nonfound from "../pages/NonFound";

const Body = () => {
  return (
    <>
      <div className="Body">
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/students" element={<Students />} />
          {/* <Route path="*" element={<Nonfound />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Body;
