import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/favorites.css";

export const Favorites = () => {
  const { store, actions } = useContext(Context); //nos traemos los favorites desde store destructurado
  const [favList, setfavList] = useState([]);
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      let favoriteList = await actions.fetchProtegido(`/user/favorites`);
      if (favoriteList.status == 200) {
        favoriteList = await favoriteList.json();
        console.log(favoriteList);
        setfavList(favoriteList);
        // store.favList = favoriteList;
        console.log("frak", favList);
        return favoriteList;
      } else {
        favoriteList = await favoriteList.json();
        console.log("frok", favoriteList);
      }
    }
    fetchFavorites();
    setfavList(async () => await fetchFavorites());

    async function fetchUserInfo() {
      let userInfo = await actions.fetchProtegido(`/profile/` + store.username);
      if (userInfo.status == 200) {
        userInfo = await userInfo.json();
        console.log("prueba", userInfo);
        setuserInfo(userInfo);
        store.userDetails = userInfo;

        return userInfo;
      } else {
        userInfo = await userInfo.json();
        console.log("si funco", userInfo);
      }
    }
    fetchUserInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="profilebg mx-auto">
          <img
            src={userInfo.image}
            className="profile-img-top rounded-circle mx-auto d-block"
            alt="..."
          />
          <h5 className="username text-center">{store.username}</h5>
          <h6 className="myprofile text-center"> My Profile</h6>
        </div>
        <div className="favoritecards mx-auto">
          <h3 className="myfavoritestitle text-center"> MY FAVORITES</h3>
        </div>
        <div className="container spacing">
        {favList && favList.length > 0 ? (
          favList.map((item, index) => {
            return (
              <li className="ms-1 me-1 text-primary" key={index}>
                {item.recipe_title}
                <i
                  onClick={() => actions.removeFav(item.id)}
                  class="fa fa-trash"
                  aria-hidden="true"
                  role="button"
                ></i>
              </li>
            );
          })
        ) : (
          <>
            <p> NO hay favoritos </p>
          </>
        )}
          
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
