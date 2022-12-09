import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/recipes.css";

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
      <div className="container">
        {single ? (
          <div className="d-flex flex-row">
            <div className="d-flex flex-column mx-5">
              {" "}
              {/* Columna 1*/}
              {/* Título 1*/}
              <div>
                <Link to={`/categories/${single.category}`}>
                  <p class="btn btn-outline-info categoryname">
                    {single.category_name}
                  </p>
                </Link>
              </div>
              <div>
                <h1 className="recipetitle">{single.title}</h1>
              </div>
              <div>{single.rating}</div>
              <div className="d-flex flex-row justify-content-evenly">
                {/* Nutritional Facts 1*/}
                <div className="rounded facts d-flex flex-column p-3">
                  <h1>NURITIONAL FACTS</h1>
                  <div className="d-flex flex-row justify-content-between">
                    <p>PROTEIN</p>
                    <p>{single.protein}</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <p>FAT</p>
                    <p>{single.fat}</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <p>CARB</p>
                    <p>{single.carbs}</p>
                  </div>
                </div>

                {/* Nutritional Facts 1*/}
                <div className="rounded information d-flex flex-column p-3">
                  <h1>INFORMATION (?)</h1>
                  <div className="d-flex flex-row justify-content-between">
                    <p>SERVINGS</p>
                    <p>{single.servings}</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <p>PREP</p>
                    <p>{single.prep}</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <p>BAKE</p>
                    <p>{single.bake}</p>
                  </div>
                </div>
              </div>
              {/* Preparation 1*/}
              <div className="shadow p-3 mb-5 bg-white rounded my-5">
                <h1>PREPARATION</h1>
                <p>{single.preparation}</p>
              </div>
              <div className="shadow p-3 mb-5 bg-white rounded my-5">
                <h1>RELATED VIDEOS</h1>
                <div className="related1 rounded"></div>
                <div className="d-flex flex-row justify-content-evenly rounded">
                  <div className="related2 rounded my-4 first"></div>
                  <div className="related2 rounded my-4"></div>
                  <div className="related2 rounded my-4"></div>
                  <div className="related2 rounded my-4 last"></div>
                </div>
              </div>
              <div className="shadow p-3 mb-5 bg-white rounded my-5">
                <h1>REVIEW {single.title}</h1>
                <div className="write rounded my-5">
                  <p className="mx-2">Write a review</p>
                </div>
                <div
                  className="review-widget_net my-5"
                  data-uuid="d7609226-72c8-40ec-b8ff-60686f2cf8e3"
                  data-template="2"
                  data-filter=""
                  data-lang="en"
                  data-theme="light"
                >
                  <center>
                    <a
                      href="https://www.review-widget.net/"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src="https://grwapi.net/assets/spinner/spin.svg"
                        title="Google Review Widget"
                        alt="Google Review Widget"
                      />
                    </a>
                  </center>
                </div>
                <script
                  async
                  type="text/javascript"
                  src="https://grwapi.net/widget.min.js"
                ></script>
                <div>
                  <p>
                    By submitting this review, you agree to accept our Privacy
                    Policy and our Terms & Conditions
                  </p>
                </div>
              </div>
            </div>

            {/* Columna 2*/}
            <div className="column mx-5">
              {/* Recipe Image*/}
              <div className="recipeimage rounded"></div>
              {/* Username box*/}
              <div className="btn btn-outline-info usernamebox rounded my-3 d-flex flex-row justify-content-middle">
                <div className="usercircle p-5 rounded-circle"></div>
                <div className="usernameinfo">
                  <p>
                    Username<br></br>Dietary Preferences
                  </p>
                </div>
              </div>

              <div className="d-flex flex-column">
                {/* Favorites box*/}
                <div className="btn btn-outline-info my-2 favorite">
                  FAVORITE
                </div>
                {/* Social media share box*/}
                <div className="btn btn-outline-info my-2 favorite">SHARE</div>
              </div>
              {/* Ingredients box*/}
              <div className="shadow p-3 mb-5 bg-white rounded my-5 sidebox">
                <h1>Ingredients List</h1>
                <p>{single.ingredients}</p>
              </div>

              {/* Free of box*/}
              <div className="shadow p-3 mb-5 bg-white rounded my-5 sidebox">
                <h1>FREE OF</h1>
                <p>{single.free_of}</p>
              </div>

              {/* Adds box*/}
              <div className="shadow p-3 mb-5 bg-white rounded my-5 sidebox">
                <h1 className="my-3">PROMOTED</h1>
                <div className="rounded promoted my-3"></div>
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
    </>
  );
};
