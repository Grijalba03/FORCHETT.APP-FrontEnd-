// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import "../../styles/mainmenu.css";

export const MainMenu = () => {
  const [isOpen, setIsopen] = useState(false);

  const MainMenu = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <div className="container-menu">
      <div className="text-center">
        <button
          type="button"
          onClick={MainMenu}
          className="btn btn-primary rounded-circle"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <p>Menu</p>
      </div>
      <div className="text-center">
        <i className="fa-regular fa-circle-user iconmod"></i>
      </div>
      <div className="text-center">
        <i className="fa-solid fa-user-plus iconmod"></i>
      </div>
      <div className="text-center">
        <i className="fa-solid fa-right-to-bracket iconmod"></i>
      </div>
      <div className="text-center">
        <i className="fa-solid fa-heart iconmod"></i>
      </div>

      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className="sd-header">
          <h3 className="mb-0">Main Menu</h3>
          <div className="btn btn-primary" onClick={MainMenu}>
            <i className="fa fa-times"></i>
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <a className="sd-link">Register</a>
            </li>
            <li>
              <a className="sd-link">Login</a>
            </li>
            <li>
              <a className="sd-link">Explore</a>
            </li>
            <li>
              <a className="sd-link">Random</a>
            </li>
            <h4>Categories</h4>
            <li>
              <a className="sd-link">Breakfast</a>
            </li>
            <li>
              <a className="sd-link">Lunch</a>
            </li>
            <li>
              <a className="sd-link">Brunch</a>
            </li>
            <li>
              <a className="sd-link">Dinner</a>
            </li>
            <li>
              <a className="sd-link">Salads</a>
            </li>
            <li>
              <a className="sd-link">View more...</a>
            </li>
            <h4>Extra</h4>
            <li>
              <a className="sd-link">blablablah</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={MainMenu}
      ></div>
    </div>
  );
};

ReactDOM.render(<MainMenu />, document.getElementById("app"));
