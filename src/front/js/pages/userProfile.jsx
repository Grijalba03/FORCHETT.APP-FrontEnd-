import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/userProfile.css";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const history = useNavigate();
  const usernameProfile = useParams();

  useEffect(() => {
    async function fetchUsername() {
      let response = await actions.fetchGenerico("/user/profile/" + usernameProfile.username);
      if (response.status == 200) {
        response = await response.json();
        store.UserProfile = response;
        console.log(response);
      } else {
        response = await response.json();
        console.log(response);
      }
    }

    fetchUsername(); 
  }, []);

    
  
  

  return (
    <>
      <div className="container">
        <div className="profilebg rounded border border 3- mx-auto">
          <img
            src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
            className="profile-img-top rounded-circle mx-auto d-block"
            alt="..."
          />{" "}
          {""}
          <h5 className="username text-center"> UserName</h5>
          <div className="profileButtons">
            <button
              type="button"
              className=" buttons-under-username btn btn-secondary btn-sm"
            >
              Youtube
            </button>{" "}
            <button
              type="button"
              className=" buttons-under-username btn btn-secondary btn-sm"
            >
              Meta
            </button>{" "}
            <button
              type="button"
              className=" buttons-under-username btn btn-secondary btn-sm"
            >
              Twitter
            </button>{" "}
            <button
              type="button"
              className=" buttons-under-username btn btn-secondary btn-sm"
            >
              Instagram
            </button>
          </div>
        </div>
        <div className="favoritecards mx-auto">
          <h3 className="myfavoritestitle text-center">My Recipes</h3>
        </div>
        <div className="recipesContainer"></div>
        <div className="returnHomeButton text-center">
          <Link to="/">
            <span
              className="btn btn-primary btn-lg align-items-center"
              href="#"
              role="button"
            >
              Return to Home
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
