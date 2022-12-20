import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const [recarga, setRecarga] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let response = await actions.fetchGenerico("/profile/<string:username>");
      if (response.status == 200) {
        response = await response.json();
        store.UserProfile = response;
        console.log("user profile response",response)
      } else {
        response = await response.json();
      }
    }

    fetchData();

  }, [recarga]);

  return (
    <>
      <div className="container">
        <div className="profilebg mx-auto">   
               
          {/*Username and social media links */}
          <h5 className="username text-center"> UserName</h5>
          <button
            type="button"
            className=" buttons under username btn btn-secondary btn-sm"
          >
            Youtube
          </button>{" "}
          <button
            type="button"
            className=" buttons under username btn btn-secondary btn-sm"
          >
            Facebook
          </button>
          <button
            type="button"
            className=" buttons under username btn btn-secondary btn-sm"
          >
            Twitter
          </button>
        </div>
        <div className="favoritecards mx-auto">
          <h3 className="myfavoritestitle text-center">
            {" "}
            COOKING RECIPES BY USERNAME
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

        <div className="row justify-content-center">            
            <div className="col"></div>      
            <div className="col mx-auto align-items-middle"><Link to="/"> <button className="btn btn-outline-info categoryname home my-5" role="button">Return to Home</button></Link></div>
            <div className="col"></div>         
        </div>

      </div>
    </>
  );
};
