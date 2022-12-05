import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Categoriessingle = (props) => {
  const { store, actions } = useContext(Context); //nos traemos las categorias desde store destructurado
  const [recarga, setRecarga] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    async function fetchsingleCategory() {
      let response = await actions.fetchGenerico(`/categories/${params.theid}`);
      if (response.status == 200) {
        response = await response.json();
        store.catsingle = response;
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
        console.log(response);
        props.funcionRecarga(!props.estadoRecarga);
      } else {
        response = await response.json();
        console.log(response);
      }
    }
    fetchRecipes();
  }, [recarga]);

  return (
    <>
      <div className="mt-5">
        <div className="container spacing">
          {store.recipes && store.recipes.length > 0 && store.recipes.category == store.cat.id? (
              <>
              <h1 className="text-center">Recipes list by category</h1>
              <div className="container spacing">
                <div className="d-flex mt-3 mb-3">
                  {store.recipes.map((item, index) => {
                    return (
                      <div key={index} className="col mx-1 px-1">
                        <div
                          className="card card-background"
                          style={{ width: "18rem" }}
                        >
                          <div>
                            {" "}
                            {/* Cajita con imagen y rating */}
                            <img
                              src="https://via.placeholder.com/400x200"
                              className="card-img-top rounded"
                              alt="..."
                            />
                            <p>{item.rating}</p>
                          </div>
    
                          <div className="card-body card-background">
                            {" "}
                            {/* Cajita con titulo, descripcion y view / category / like */}
                            <h5 className="card-title">{item.title}</h5>
                            <p>{item.description}</p>
                          </div>
                          <div className="d-flex justify-content-between mx-2 my-2 card-background">
                            <div>
                              <Link
                                className="recipe-buttons"
                                to={`/recipes/${item.id}`}
                              >
                                VIEW
                              </Link>
                              <Link
                                className="recipe-buttons"
                                to={`/categories/${item.category}`}
                              >
                                {item.category}
                              </Link>
                            </div>
                            <div>
                              <button
                                onClick={(e) => {
                                  actions.addfavorites(item.title);
                                }}
                                className="heart"
                              >
                                <i className="far fa-heart"></i>
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
