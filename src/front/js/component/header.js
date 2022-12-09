// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import logourl from "../../img/forchettapp.png";
import "../../styles/header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  // const { store, actions } = useContext(Context);
  // console.log(store.favorites);
  return (
    <div className="container-fluid">
      <div className="row p-3 bg-white">
        <div className="col-4">
        <Link to="/" className="sd-link">
          <img src={logourl} />
        </Link>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="input-group">
                <input
                  className="form-control border-end-0 border"
                  type="search"
                  value="search"
                  id="example-search-input"
                />
                <span className="input-group-append">
                  <button
                    className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5"
                    type="button"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-primary btnmod">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
