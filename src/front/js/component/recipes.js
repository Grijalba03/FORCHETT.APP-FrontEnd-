import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

export const RecipesList = (props) => {
  const { store, actions } = useContext(Context); //nos traemos las recetas desde store destructurado

  useEffect(() => {
    async function fetchData() {
      let response = await actions.fetchGenerico("/recipes");
      if (response.status == 200) {
        response = await response.json();
        store.recipes = response;
        console.log(response);
        props.funcionRecarga(!props.estadoRecarga);
      } else {
        response = await response.json();
        console.log(response);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-5">
      {store.recipes && store.recipes.length > 0 ? (
        <>
          <h1 className="text-center">Cooking Recipes</h1>
          <div className="container spacing">
            <div className="d-flex flex-row flex-nowrap mt-3 mb-3">
              {store.recipes.map((item, index) => {
                return (
                  <div key={index} className="col mx-1 px-1">
                    <div className="card" style={{ width: "18rem" }}>
                      <div>
                        {" "}
                        {/* Cajita con imagen y rating */}
                        <img
                          src="https://via.placeholder.com/400x200"
                          className="card-img-top"
                          alt="..."
                        />
                        <p>{item.rating}</p>
                      </div>

                      <div className="card-body">
                        {" "}
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-2 my-2">
                        <div>
                          <Link
                            to={`/recipe/${item.id}`}
                            className="btn btn-outline-primary"
                          >
                            VIEW
                          </Link>
                          <Link
                            to={`/categories`}
                            className="btn btn-outline-primary"
                          >
                            CATEGORY
                          </Link>
                        </div>
                        <div>
                          <button
                            onClick={(e) => {
                              actions.addfavorites(item.title);
                            }}
                            className="btn btn-outline-warning"
                          >
                            <i className="fas fa-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-center">No recipes available</h1>
      )}
    </div>
  );
};
