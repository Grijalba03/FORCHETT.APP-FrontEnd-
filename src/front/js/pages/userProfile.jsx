import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userProfile.css";


export const UserProfile = () => {
  const { store, actions } = useContext(Context); 
  const [recarga, setRecarga] = useState(false );
  const history = useNavigate(); 


  useEffect(() => { 
    async function fetchData() { 
      let response = await actions.fetchGenerico("/profile/<string:username>"); 
      if (response.status == 200) {
    
        response = await response.json();
        store.UserProfile = response; 
      } else { 
        response = await response.json();
        }
  }

    fetchData(); 
  }, [recarga]);

  return (
    <>
      <div className="container">
        <div className="profilebg border border 3- mx-auto">
          <img
            src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
            className="profile-img-top rounded-circle mx-auto d-block"
            alt="..."
          /> {""}
          <h5 className="username text-center"> UserName</h5>
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
            Facebook
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
        <div className="favoritecards mx-auto">
          <h3 className="myfavoritestitle text-center">
            
            MY FAVORITES
          </h3>
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
                <h5 className="card-title text-center">Breakfast</h5>
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
                <h5 className="card-title text-center">Lunch</h5>
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
                <h5 className="card-title text-center">Dinner</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-4 h-300">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/14.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Brunch</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-5 h-300">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/14.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Kids</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-6 h-300">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/14.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Salads</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-7 h-300">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/14.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Drinks</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-8 h-300">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/14.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Desserts</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-9 h-300">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/14.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Snacks</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
