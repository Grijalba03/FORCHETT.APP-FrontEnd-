import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/categories.css";

export const Categories = () => {
  const { store, actions } = useContext(Context); //nos traemos las categorias desde store destructurado
  const [recarga, setRecarga] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let response = await actions.fetchGenerico("/categories");
      if (response.status == 200) {
        response = await response.json();
        store.cat = response;
        console.log(response);
      } else {
        response = await response.json();
        console.log(response);
      }
    }

    fetchData();

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

  console.log(store.recipes);
  return (
    <>
      <div className="container">
        <h1 className="text-center">Categories</h1>
        <p className="text-center">Choose your favorite category</p>
        <div className="d-flex justify-content-evenly">
          {store.cat && store.cat.length > 0 ? (
            store.cat.map((item, index) => {
              return (
                <div className="circle p-2 rounded-circle" key={index}>
                  <Link className="category-name" to={`/categories/${item.id}`}>
                    <p className="category-name">{item.category_name}</p>
                  </Link>
                </div>
              );
            })
          ) : (
            <h1 className="text-center">No categories available</h1>
          )}
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/1`}>
            <h1>Breakfast</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 1)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="fa-solid fa-heart heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/2`}>
            <h1>Lunch</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 2)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>
                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/3`}>
            <h1>Brunch</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 3)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/4`}>
            <h1>Dinner</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 4)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/5`}>
            <h1>Salads</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 5)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/6`}>
            <h1>Drinks</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 6)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/7`}>
            <h1>Vegan</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 7)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/8`}>
            <h1>Vegetarian</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 8)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/9`}>
            <h1>Kids</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 9)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link className="recipe-buttons" to={`/categories/10`}>
            <h1>Snacks</h1>
          </Link>
          <div className="container spacing">
            <div className="d-flex mt-3 mb-3">
              {store.recipes
                .filter((auxiliar) => auxiliar.category == 10)
                .map((filteredAuxiliar) => (
                  <div className="col mx-1 px-1">
                    <div
                      className="card card-background"
                      style={{ width: "18rem" }}
                    >
                      <div>
                        {/* Cajita con imagen y rating */}
                        <img
                          src={filteredAuxiliar.image}
                          className="card-img-top rounded"
                          alt="..."
                        />
                        <p>{filteredAuxiliar.rating}</p>
                      </div>
                      <div className="card-body card-background">
                        {/* Cajita con titulo, descripcion y view / category / like */}
                        <h5 className="card-title">{filteredAuxiliar.title}</h5>
                        <p>{filteredAuxiliar.description}</p>
                      </div>
                      <div className="d-flex justify-content-between mx-3 my-2 card-background">
                        <div className="align-items-center">
                          <Link
                            className="recipe-buttons px-5"
                            to={`/recipes/${filteredAuxiliar.id}`}
                          >
                            CLICK TO VIEW
                          </Link>
                        </div>

                        <button
                          onClick={(e) => {
                            actions.addFav(filteredAuxiliar.title);
                          }}
                          className="heart align-items-end"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col"></div>
          <div className="col mx-auto align-items-middle">
            <Link to="/">
              {" "}
              <button
                className="btn btn-outline-info categoryname home my-5"
                role="button"
              >
                Return to Home
              </button>
            </Link>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
