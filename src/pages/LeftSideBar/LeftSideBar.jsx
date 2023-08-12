import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "white",
  });
  return (
    <div className="left-side-bar-container">
      <NavLink style={getActiveStyle} className="link" to="/">
        Dashboard
      </NavLink>
      <NavLink style={getActiveStyle} className="link" to="/departments">
        Departmants
      </NavLink>
      <NavLink style={getActiveStyle} className="link" to="/productListing">
        Products
      </NavLink>
    </div>
  );
};

export default LeftSideBar;
