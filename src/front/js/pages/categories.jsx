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
  }, [recarga]);

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

        <div className="d-block">
          {store.cat && store.cat.length > 0 ? (
            store.cat.map((item, index) => {
              return (
                <div className="d-flex justify-content-start" key={index}>
                  <div className="category-name">{item.category_name}</div>
                </div>
              );
            })
          ) : (
            <h1 className="text-center">No categories available</h1>
          )}
        </div>
      </div>
    </>
  );
};