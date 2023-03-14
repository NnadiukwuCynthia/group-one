import React from "react";
import "../index.css";
import Menu from "../Components/Navbar/Menu";
import Body from "../Components/Body";

const Page = () => {
  return (
    <>
      <div className="Page">
        <div className="Sidebar">
          <Menu />
        </div>
        <div className="bodyBar">
          <Body />
        </div>
      </div>
    </>
  );
};

export default Page;
