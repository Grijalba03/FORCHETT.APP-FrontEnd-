import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Categoriessingle = (props) => {
  const { store, actions } = useContext(Context); //nos traemos las categorias desde store destructurado
  const params = useParams();
  const [singlecat, setSinglecat] = useState("")

  useEffect(() => {
    async function fetchsingleCategory() {
      let response = await actions.fetchGenerico(`/categories/${params.theid}`);
      if (response.status == 200) {
        response = await response.json();
        setSinglecat(response);
        console.log(singlecat);
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
            <h1 className="display-4">{singlecat.category_name ? singlecat.category_name : "Loading"}</h1>
            
          </div>
        ) : (
          <h1 className="text-center">No categories available</h1>
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
