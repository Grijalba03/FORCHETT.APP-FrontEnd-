import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { userActions } from "../store/user"; 
import "../../styles/userProfile.css";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const [recarga, setRecarga] = useState(false);
  const history = useNavigate(); 
  const [userInfo, setuserInfo] = useState ([]);
  const [Recipes, setRecipes] = useState ([]);

  useEffect(() => {
  async function fetchUserInfo() {
      let userInfo = await actions.fetchProtegido(`/profile/`+store.username);
      if (userInfo.status == 200) {
        userInfo = await userInfo.json();
        console.log("prueba",userInfo);
        setuserInfo(userInfo);
        store.userDetails = userInfo;
        
        return userInfo
      } else {
        userInfo = await userInfo.json();
        console.log("si funco", userInfo)
      }
    }
    fetchUserInfo(); 

    async function fetchRecipes() {
      let Recipes = await actions.fetchProtegido(`/profile/`+store.recipes);
      if (Recipes.status == 200) {
        Recipes = await Recipes.json();
        console.log("prueba",Recipes);
        setinfoRecipes(Recipes);
        store.Recipes = Recipes;
        
        return Recipes
      } else {
        Recipes= await Recipes.json();
        console.log("si funco", Recipes)
      }
    }
    fetchUserInfo();

  }, [recarga]);

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
          <h6 className="dietaryPreferences text-center">{userInfo.dietaryPreferences} </h6>
               
          {/*Username and social media links */}
          <div className="socialMedia">
          <a className="btn buttonSocial" href={userInfo.youtube}  role="button">YouTube</a>
          <a className="btn buttonSocial" href={userInfo.meta}  role="button">Meta</a>
          <a className="btn buttonSocial" href={userInfo.instagram}  role="button">Instagram</a>
          <a className="btn buttonSocial" href={userInfo.twitter}  role="button">Twitter</a>
          </div>
        </div>
        <div className="favoritecards mx-auto">
          <h3 className="myfavoritestitle text-center">
            {" "}
            COOKING RECIPES BY USERNAME
          </h3>
        </div>
        <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.username == store.username)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
