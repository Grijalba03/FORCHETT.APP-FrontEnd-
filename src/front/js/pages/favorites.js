import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/favorites.css";

export const Favorites = () => {
  return (
    <>
      <div className="container">
        <div className="profilebg mx-auto">
          <img
            src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
            className="profile-img-top rounded-circle mx-auto d-block"
            alt="..."
          />
          <h5 className="username text-center"> UserName</h5>
          <h6 className="myprofile text-center"> My Profile</h6>
        </div>
        <div className="favoritecards mx-auto">
          <h3 className="myfavoritestitle text-center"> MY FAVORITES</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col">
            <div className="card-1 h-300">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Drinks</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-2 h-300">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Breakfast</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-3 h-300">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/14.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Brunch</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
