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
      <div className="container my-5">
        <div className="profilebg mx-auto">
          <img
            src={userInfo.image}
            className="profile-img-top rounded-circle mx-auto d-block"
            alt="..."
          />
          <h2 className="text-center userfont">{store.username}</h2>
        </div>
        <div className="favoritecards mx-auto">
          <h3 className="myfavoritestitle text-center"> MY FAVORITES</h3>
        </div>


        {favList && favList.length > 0 ? (
          <div className="container spacing">
              <div className="row d-flex mt-3 mb-3">
                {favList.map((item, index) => {
                  return (
                    <div key={index} className="col mx-1 px-1 my-2 py-1">
                      <div
                        className="card card-background"
                        style={{ width: "18rem" }}
                      >
                        <div classname="containingimage">
                          <img
                            src={item.recipe_image}
                            className="card-img-top rounded"
                            alt="..."
                          />
                        </div>
                        <div className="card-body card-background">
                          <h5 className="card-title text-center">
                            {item.recipe_title}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between mx-2 my-2 card-background">
                          <div>
                            <Link
                              className="recipe-buttons"
                              to={`/recipes/${item.id}`}
                            >
                              VIEW
                            </Link>
                          </div>
                          <div className="ms-1 me-1">
                            <i onClick={() => actions.removeFav(item.id)}
                              className="fa fa-trash basurero" aria-hidden="true" role="button"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        ) : <><p className="text-center tipofav my-5"><i className="fa-solid fa-triangle-exclamation"></i> No favorites to display</p> </>}
          
       

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
