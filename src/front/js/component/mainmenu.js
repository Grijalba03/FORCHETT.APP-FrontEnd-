import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import "../../styles/mainmenu.css";

export const MainMenu = () => {
  const [isOpen, setIsopen] = useState(false);
  const { store, actions } = useContext(Context);

  const menu = () => {
    // isOpen === true ? setIsopen(false) : setIsopen(true);
    setIsopen(!isOpen);
  };

  return (
    <div className="container-menu">
      <div className="text-center">
        <button
          type="button"
          onClick={menu}
          className="btn btn-primary rounded-circle"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <p>Menu</p>
      </div>
      {store.username ? ( // User Account
        <div className="text-center">
          <Link to="/user/account" className="sd-link">
            <i className="fa-regular fa-circle-user iconmod"></i>
          </Link>
        </div>
      ) : (
        <></>
      )}
      {store.username ? ( //Login
        <></>
      ) : (
        <div className="text-center">
          <Link to="/login" className="sd-link">
            <i className="fa-solid fa-right-to-bracket iconmod"></i>
          </Link>
        </div>
      )}
      {store.username ? ( //Signup
        <></>
      ) : (
        <div className="text-center">
          <Link to="/signup" className="sd-link">
            <i className="fa-solid fa-user-plus iconmod"></i>
          </Link>
        </div>
      )}
      {store.username ? ( // Logout
        <div className="text-center">
          <i className="fa-solid fa-right-to-bracket iconmod"></i>
        </div>
      ) : (
        <></>
      )}
      {store.username ? ( // Favorites
        <div className="text-center">
          <Link to="/user/favorites/:theid" className="sd-link">
            <i className="fa-solid fa-heart iconmod"></i>
          </Link>
        </div>
      ) : (
        <></>
      )}
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className="sd-header">
          <h3 className="mb-0">Main Menu</h3>
          <div className="btn btn-primary" onClick={menu}>
            <i className="fa fa-times"></i>
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <Link to="/signup" className="sd-link">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="sd-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="sd-link">
                Random
              </Link>
            </li>
            <h4>Categories</h4>
            <li>
              <Link to="/categories/1" className="sd-link">
                Breakfast
              </Link>
            </li>
            <li>
              <Link to="/categories/2" className="sd-link">
                Lunch
              </Link>
            </li>
            <li>
              <Link to="/categories/3" className="sd-link">
                Brunch
              </Link>
            </li>
            <li>
              <Link to="/categories/4" className="sd-link">
                Dinner
              </Link>
            </li>
            <li>
              <Link to="/categories/5" className="sd-link">
                Salads
              </Link>
            </li>
            <li>
              <Link to="/categories" className="sd-link">
                View more...
              </Link>
            </li>
            <h4>Extra</h4>
            <li>
              <Link to="/userlist" className="sd-link">
                Explore members
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={menu}
      ></div>
    </div>
  );
};

// ReactDOM.render(<MainMenu />, document.getElementById("app"));
