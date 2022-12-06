import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Categoriessingle = (props) => {
  const { store, actions } = useContext(Context); //nos traemos las categorias desde store destructurado
  const params = useParams();
  const [singlecat, setSinglecat] = useState("");

  useEffect(() => {
    async function fetchsingleCategory() {
      let response = await actions.fetchGenerico(`/categories/${params.theid}`);
      if (response.status == 200) {
        response = await response.json();
        setSinglecat(response);
        console.log(response);
      } else {
        response = await response.json();
        console.log(response);
      }
    }
    fetchsingleCategory();

    async function fetchRecipes() {
      let response = await actions.fetchGenerico("/recipes");
      if (response.status == 200) {
        response = await response.json();
        store.recipes = response;
        console.log(store.recipes);
      } else {
        response = await response.json();
        console.log(response);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="mt-5">
        <div className="container spacing">
          {singlecat ? (
            <div>
              <h1 className="display-4">
                {singlecat.category_name ? singlecat.category_name : "Loading"}
              </h1>
              <div className="container spacing">
                <div className="d-flex mt-3 mb-3">
                  {singlecat.found.map((item, index) => {
                    return (
                      // <div key={index}>{item.title}</div>

                      <div key={index} className="col mx-1 px-1">
                        <div
                          className="card card-background"
                          style={{ width: "18rem" }}
                        >
                          <div>
                            {/* Cajita con imagen y rating */}
                            <img
                              src="https://via.placeholder.com/400x200"
                              className="card-img-top rounded"
                              alt="..."
                            />
                            <p>{item.rating}</p>
                          </div>
                          <div className="card-body card-background">
                            {/* Cajita con titulo, descripcion y view / category / like */}
                            <h5 className="card-title">{item.title}</h5>
                            <p>{item.carbs}</p>
                            <p>{item.fat}</p>
                            <p>{item.free_of}</p>
                            <p>{item.protein}</p>
                            <p>{item.servings}</p>
                            <p>{item.preparation}</p>
                          </div>
                          <div className="d-flex justify-content-between mx-3 my-2 card-background">
                            <div className="align-items-center">
                              <Link
                                className="recipe-buttons px-5"
                                to={`/recipes/${item.id}`}
                              >
                                CLICK TO VIEW
                              </Link>
                            </div>

                            <button
                              onClick={(e) => {
                                actions.addfavorites(item.id);
                              }}
                              className="heart align-items-end"
                            >
                              <i className="far fa-heart"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-center">No categories available</h1>
          )}

          <div>
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
      </div>
    </>
  );
};
