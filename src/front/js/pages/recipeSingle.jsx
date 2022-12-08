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
              
              <div className="d-flex flex-column"> {/* Columna 1*/}
                 {/* Título 1*/}
                <div><p class="btn btn-outline-info categoryname">{single.category_name}</p></div>
                <div><h1 className="recipetitle">{single.title}</h1></div>
                <div>{single.rating}</div>

                <div className="d-flex flex-row justify-content-evenly">
                  {/* Nutritional Facts 1*/}
                  <div className="rounded facts d-flex flex-column p-3"><h1>NURITIONAL FACTS</h1> 
                    <div className="d-flex flex-row justify-content-between"><p>PROTEIN</p><p>{single.protein}</p></div>
                    <div className="d-flex flex-row justify-content-between"><p>FAT</p><p>{single.fat}</p></div>
                    <div className="d-flex flex-row justify-content-between"><p>CARB</p><p>{single.carbs}</p></div>
                  </div>

                  {/* Nutritional Facts 1*/}
                  <div className="rounded information d-flex flex-column p-3"><h1>INFORMATION (?)</h1>
                    <div className="d-flex flex-row justify-content-between"><p>SERVINGS</p><p>{single.servings}</p></div>
                    <div className="d-flex flex-row justify-content-between"><p>PREP</p><p>{single.prep}</p></div>
                    <div className="d-flex flex-row justify-content-between"><p>BAKE</p><p>{single.bake}</p></div>
                  </div>
                </div>

                 {/* Preparation 1*/}
                <div className="shadow p-3 mb-5 bg-white rounded my-5"><h1>PREPARATION</h1>
                <p>{single.preparation}</p></div>

                <div className="shadow p-3 mb-5 bg-white rounded my-5"><h1>RELATED VIDEOS</h1>
                <div className="related1 rounded"></div>
                  <div className="d-flex flex-row justify-content-evenly rounded">
                    <div className="related2 rounded my-4 first"></div>
                    <div className="related2 rounded my-4"></div>
                    <div className="related2 rounded my-4"></div>
                    <div className="related2 rounded my-4 last"></div>
                  </div>
                </div>

                <div className="shadow p-3 mb-5 bg-white rounded my-5"><h1>REVIEW {single.title}</h1>
                  <div className="write rounded">Write a review</div>
                  <div>Browse Image</div>
                  <div>
                    <div>RATE RECIPE</div>
                    <div>RATE YOUR EXPERIENCE/RESULT</div>
                  </div>
                  <div>Submit Review</div>
                  <div><p>By submitting this review, you agree to accept our Privacy Policy and our Termns & Conditions</p></div>
                </div>

                <div>Reviews</div>


              </div>

               {/* Columna 2*/}
              <div className="column">
                <div>Recipe Image</div>
                <div>Username</div>
                <div>Favorite</div>
                <div>Share</div>
                <div>Ingredients List</div>
                <div>Free of: {single.free_of}</div>
                <div>PROMOTED</div>
                
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
