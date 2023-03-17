import "./App.css";
import "./index.css";
import Welcome from "./pages/welcome";
import { Routes, Route, Outlet } from "react-router-dom";
import Signup from "./pages/signup";
import LogIn from "./pages/logIn";
import NewPassword from "./pages/newPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
