//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import logourl from "../../img/forchettapp.png";
import "../../styles/header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const { store, actions } = useContext(Context);
  // console.log(store.favorites);

  const userSearch = async (e) => {
    e.preventDefault();
    console.log("user Submit recipe func");

    const data = new FormData(e.target);
    let title = data.get("searchQuery");
    console.log("obj: ", title);


    let obj = {
      title: title,
    };

    console.log('obj ', obj);
    

    let response = await actions.fetchProtegido("/search", obj, "POST");
    console.log("Response: ", response);
    if (response.status == 200) {
      let respuestaJson = await response.json();
      console.log("Search Query : ", respuestaJson);
    } else {
      // error
    }
  };

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
              <form
                onSubmit={(data) => {
                  userSearch(data);
                  // history("/");
                }}
              >
                <input
                  className="form-control border-end-0 border"
                  type="search"
                  name="searchQuery"
                  // onSubmit={(data) => {
                  //   userSearch(data);
                  //   // history("/");
                  // }}
                  //onClick={userSearch}
                  // value="search"
                  // id="example-search-input"
                />
                <span className="input-group-append">
                  <button
                    className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5"
                    type="button"
                    // onClick={(data) => {
                    //   userSearch(data);
                    //   // history("/");
                    // }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <Link to="/submit">
            <button type="button" className="btn btn-primary btnmod">
              <i className="fa-solid fa-plus"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
