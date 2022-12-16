import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/favorites.css";



export const Favorites = () => {
  const { store, actions } = useContext(Context); //nos traemos los favorites desde store destructurado 
  const [favList, setfavList] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     let response = await actions.fetchProtegido("/user/favorites");
  //     if (response.status == 200) {
  //       response = await response.json();
  //       store.favorites = response;
  //       console.log(response);
  //     } else {
  //       response = await response.json();
  //       console.log(response);
  //     }
  //   }
  
  //   fetchData();
  // }, []); 

  useEffect(() => {
    async function fetchFavorites() {
      let favoriteList = await actions.fetchProtegido(`/user/favorites`);
      if (favoriteList.status == 200) {
        favoriteList = await favoriteList.json();
        // setfavList(favoriteList);
         store.favList = favoriteList;
        console.log("frak", favoriteList);
      } else {
        favoriteList = await favoriteList.json();
        console.log("frok", favoriteList);
      }
    }
    fetchFavorites();
  }, []);

  return (
    <>
      <div className="container">
        {/* {favList} */}
        {/* {store.favList ? ( */}
        {store.favList && store.favList.lenght > 0 ? (
          store.favList.map((item, index) => {
            return (
              <li className="ms-1 me-1 text-primary" key={index}>
                {item.title}
                <i
                  onClick={() => {
                    actions.removeFav(index);
                  }}
                  class="fa fa-trash"
                  aria-hidden="true"
                ></i>
              </li>
            );
          })
        ) : (
          <>
          
          
          </>
        )}

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

        <div className="row justify-content-center">
          <div className="col"></div>
          <div className="col mx-auto align-items-middle">
            <Link to="/">
              {" "}
              <button
                className="btn btn-outline-info categoryname home my-5"
                role="button"
              >
                Return to Home
              </button>
            </Link>
          </div>
          <div className="col"></div>
        </div>

      </div>
    </>
  );
};
