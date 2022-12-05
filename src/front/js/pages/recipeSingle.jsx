import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Recipesingle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    async function fetchsingleRecipe() {
      let response = await actions.fetchGenerico(`/recipes/${params.theid}`);
      if (response.status == 200) {
        response = await response.json();
        store.recipesingle = response;
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
          {store.recipesingle ? (
            <div>
              <h1 className="display-4">Title: {store.recipesingle.title ? store.recipesingle.title : "Loading"}</h1>
              <p className="display-5">Category: {store.recipesingle.category ? store.recipesingle.category : "Loading"}</p>
              <p className="display-5">Rating: {store.recipesingle.rating ? store.recipesingle.rating : "Loading"}</p>
              <p className="display-5">Description: {store.recipesingle.description ? store.recipesingle.description : "Loading"}</p>
              <p className="display-5">Fat: {store.recipesingle.fat ? store.recipesingle.fat : "Loading"}</p>
              <p className="display-5">Protein: {store.recipesingle.protein ? store.recipesingle.protein : "Loading"}</p>
              <p className="display-5">Free of: {store.recipesingle.free_of ? store.recipesingle.free_of : "Loading"}</p>
              <p className="display-5">Image: {store.recipesingle.image ? store.recipesingle.image : "Loading"}</p>
              <p className="display-5">Servings: {store.recipesingle.servings ? store.recipesingle.servings : "Loading"}</p>
              <p className="display-5">Ingredients: {store.recipesingle.ingredients ? store.recipesingle.ingredients : "Loading"}</p>
              <p className="display-5">Preparation: {store.recipesingle.preparation ? store.recipesingle.preparation : "Loading"}</p>
            </div>
          ) : (
            <h1 className="text-center">No recipes available</h1>
          )}

          <div>
            <Link to="/">
              <span className="btn btn-primary btn-lg align-items-center" href="#" role="button">
                Return to Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
