import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Recipesingle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [single, setSingle] = useState("")

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
            <div>
              <h1 className="display-4">Title: {single.title ? single.title : "Loading"}</h1>
              <p className="display-5">Category: {single.category ? single.category : "Loading"}</p>
              <p className="display-5">Rating: {single.rating ? single.rating : "Loading"}</p>
              <p className="display-5">Description: {single.description ? single.description : "Loading"}</p>
              <p className="display-5">Fat: {single.fat ? single.fat : "Loading"}</p>
              <p className="display-5">Protein: {single.protein ? single.protein : "Loading"}</p>
              <p className="display-5">Free of: {single.free_of ? single.free_of : "Loading"}</p>
              <p className="display-5">Image: {single.image ? single.image : "Loading"}</p>
              <p className="display-5">Servings: {single.servings ? single.servings : "Loading"}</p>
              <p className="display-5">Ingredients: {single.ingredients ? single.ingredients : "Loading"}</p>
              <p className="display-5">Preparation: {single.preparation ? single.preparation : "Loading"}</p>
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
