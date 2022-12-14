import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const SubmitRecipe = () => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [token, setToken] = useState("");
  const userSubmit = async (e) => {
    e.preventDefault();
    console.log("user Submit recipe func");

    const data = new FormData(e.target);
    let title = data.get("title");
    let category = data.get("category");
    let prep = data.get("prep");
    let preparation = data.get("password");
    let ingredients = data.get("ingredients");
    let description = data.get("description");
    let image = data.get("image");
    let bake = data.get("bake");
    let servings = data.get("servings");


    // console.log(email, password);
    // console.log(username, password);

    let obj = {
        title: title,
        category: category,
        prep: prep,
        preparation: preparation,
        ingredients: ingredients,
        description: description,
        image: image,
        bake: bake,
        servings: servings
    };

    console.log("hola4");
    let response = await actions.fetchProtegido("/submit", obj, "POST");
    console.log("Res: ", response);
    if (response.status == 200) {
      //let respuestaJson = await response.json();
      //console.log("41: ", respuestaJson);
      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: `Hello and thanks`,
        footer: `FORCHETT.APP Member's Area`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error, failed to login.",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    // console.log(response);
    // response = await response.json(); //response es un objeto de Javascript
    // console.table("hola37", response);
    // token = response.token;
    // setToken(response.token);
    // console.log("token", token);
    // alert(response.token);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 pt-5 pb-5 text-center">
            <h2>Submit Recipe</h2>
          </div>
        </div>
        <form
          onSubmit={(recipe) => {
            userSubmit(recipe);
            // history("/");
          }}
        >
          <div className="row">
            <div className="col-12">
              <h1>Title</h1>
              <input
                name="title"
                placeholder="Write your Recipe Title"
                type="text"
                required
              />
            </div>
            <div className="row">
              <div className="col-12">
                <h1>Category</h1>
              </div>
              <input
                name="category"
                placeholder="Select category"
                type="text"
                required
              />
            </div>
            <div className="row">
              <div className="col-12">
                <h1>Preparation Time</h1>
              </div>
              <input name="prep" placeholder="how many " type="text" required />
            </div>
            <div className="row">
              <div className="col-12">
                <h1>Preparation</h1>
              </div>
              <input
                name="preparation"
                placeholder="write how to do the recipe"
                type="text"
                required
              />
            </div>
            <div className="row">
              <div className="col-12">
                <h1>Description</h1>
              </div>
              <input
                name="description"
                placeholder="add a description to your recipe"
                type="text"
                required
              />
            </div>
            <div className="row">
              <div className="col-12">
                <h1>Image</h1>
              </div>
              <input
                name="image"
                placeholder="add image"
                type="text"
                required
              />
            </div>
            <div className="row">
              <div className="col-12">
                <h1>Bake Time </h1>
              </div>
              <input
                name="bake"
                placeholder="how many time to bake"
                type="text"
                required
              />
            </div>
            <div className="row">
              <div className="col-12">
                <h1>Servings</h1>
              </div>
              <input
                name="servings"
                placeholder="how many people"
                type="text"
                required
              />
            </div>
          </div>
          <div className="row d-flex py-2">
            <button className="btn btn-primary" type="submit">
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
