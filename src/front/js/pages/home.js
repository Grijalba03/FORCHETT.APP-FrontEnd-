import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { RecipesList } from "../component/recipes";
import "../../styles/categories.css";

export const Home = () => {
  const { store, actions } = useContext(Context); //nos traemos las categorias desde store destructurado
  const [recarga, setRecarga] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let response = await actions.fetchGenerico("/categories");
      if (response.status == 200) {
        response = await response.json();
        //setCat(response);
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
      <div className="container pt-5">
        <h1 className="text-center">Categories</h1>
        <p className="text-center">Choose your favorite category</p>
        <div className="gridmod">
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

        <div>
          <RecipesList estadoRecarga={recarga} funcionRecarga={setRecarga} />
        </div>
      </div>
    </>
  );
};
