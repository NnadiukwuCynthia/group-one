import React from "react";
import { Link } from "react-router-dom";
import MenuData from "./MenuData";
import "../../index.css";

const Menu = () => {
  return (
    <>
      <div className="MenuDiv">
        {MenuData.map((data, index) => {
          const { icon, name, path } = data;
          return (
            <ul key={index}>
              <li>
                <Link to={path} className="listItem">
                  {icon} <span>{name}</span>
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
