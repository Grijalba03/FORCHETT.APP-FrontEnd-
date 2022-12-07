import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Recipesingle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [single, setSingle] = useState("");

  useEffect(() => {
    async function fetchsingleRecipe() {
      let response = await actions.fetchGenerico(`/recipes/${params.theid}`);
      if (response.status == 200) {
        response = await response.json();
        setSingle(response);
        console.log(response);
      } else {
        response = await response.json();
        console.log(response);
      }
    }
    fetchsingleRecipe();
  }, []);

  return (
    <>
      <div className="mt-5">
        <div className="container spacing">
          {single ? (
            <div className="container spacing">
              <div className="d-flex mt-3 mb-3">
                <div className="col mx-1 px-1">
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
                      <p>{single.rating}</p>
                    </div>
                    <div className="card-body card-background">
                      {/* Cajita con titulo, descripcion y detalles*/}
                      <h5 className="card-title">{single.title}</h5>
                      <p>{single.carbs}</p>
                      <p>{single.fat}</p>
                      <p>{single.free_of}</p>
                      <p>{single.protein}</p>
                      <p>{single.servings}</p>
                      <p>{single.preparation}</p>
                    </div>
                    <div className="d-flex justify-content-between mx-3 my-2 card-background">
                      <div className="align-items-center">
                        <Link
                          className="recipe-buttons px-5"
                          to={`/recipes/${single.id}`}
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
              </div>
            </div>
          ) : (
            <h1 className="text-center">No recipes available</h1>
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
