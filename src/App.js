import React from "react";
// import HeaderBar from "./Components/headerBar";
// import Preliminary from "./Components/Preliminary";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Courses from "./pages/courses";
import Messages from "./pages/messages";
import Payments from "./pages/payments";
import Quiz from "./pages/quiz";
import Students from "./pages/students";
import Welcome from "./pages/welcome";
import Signup from "./pages/signup";
import LogIn from "./pages/logIn";
import NewPassword from "./pages/newPassword";
import NonFound from "./pages/nonfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/students" element={<Students />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<NonFound />} />
      </Routes>
    </>
  );
}

export default App;
