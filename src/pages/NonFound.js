import React from "react";
import { Link } from "react-router-dom";

const NonFound = () => {
  return (
    <>
      <h1>
        Page Not Found!!! <Link to="/welcome">Home</Link>
      </h1>
    </>
  );
};

export default NonFound;
