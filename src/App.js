import React from "react";
// import HeaderBar from "./Components/headerBar";
// import Preliminary from "./Components/Preliminary";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Messages from "./pages/Messages";
import Payments from "./pages/Payments";
import Quiz from "./pages/Quiz";
import Students from "./pages/Students";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import LogIn from "./pages/logIn";
import NewPassword from "./pages/newPassword";
import NonFound from "./pages/NonFound";

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
