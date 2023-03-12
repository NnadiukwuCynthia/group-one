import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Messages from "../pages/Messages";
import Payments from "../pages/Payments";
import Quiz from "../pages/Quiz";
import Students from "../pages/Students";

const Body = () => {
  return (
    <>
      <div className="Body">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/quiz/assignment" element={<Quiz />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </>
  );
};

export default Body;
