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
      } else {
        response = await response.json();
      }
    }

    fetchData();

    async function fetchImages() {
      let response = await actions.fetchGenerico("/images");
      if (response.status == 200) {
        response = await response.json();
        store.images = response["lista"];
      } else {
        response = await response.json();
      }
    }

    fetchImages();
  }, [recarga]);

  return (
    <>
      <div className="d-flex justify-content-evenly">
        {store.images && store.images.length > 0 ? (
          store.images.map((item, index) => {
            return (
              <div className="circle p-2 rounded-circle" key={index}>
                <img src={item.ruta}></img>
              </div>
            );
          })
        ) : (
          <h1 className="text-center">No categories available</h1>
        )}
      </div>

      <div className="container">
        <div className="profilebg mx-auto">
          <img
            src="http://res.cloudinary.com/dap1nkz7g/image/upload/v1671245122/forchettapp/edzfoi7skjf4tszpdgel.png"
            className="profile-img-top rounded-circle mx-auto d-block"
            alt="..."
          />
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
      </div>
    </>
  );
};
