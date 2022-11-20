import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


export const Categories = () => {
  const { store, actions } = useContext(Context); //nos traemos las categorias desde store
  const history = useNavigate();

  return (
    <>
    <div className="d-flex justify-content-center mt-5">

        <div >
            <h1>Categories</h1>
            <p>Choose your favorite category</p>        
        </div>

       {/* Hacemos un map del arreglo de categorias para mostrarlas en una lista a la que se le pueda hacer scroll hacia la derecha */}
         <div className="d-flex flex-row flex-nowrap mt-3 mb-3" style={{ overflowX: "scroll" }}>
            {store.categories.map((item, index) => {
                return (
                <div key={index} className="col mx-1 px-1">
                    <h5>{item.name}</h5>	 {/* Aquí se despliega el nombre de la categoría */} 
                </div>
                );
            })}		
        </div>  

        {/* Luego hacemos un map del arreglo de categorias para mostrarlas en una lista a la que se le pueda hacer scroll hacia abajo */} 

        <div className="d-flex flex-row flex-nowrap mt-3 mb-3">
          {store.categories.map((item, index) => {  {/* Primero recorremos el arreglo de categorias */} 
            return (
              <div key={index} className="col mx-1 px-1">
                <h1 className="text-danger mt-5"> {item.name}</h1> {/* Aquí se despliega el nombre de la categoría */} 

                {store.recipe.map((item, index) => {  {/* Luego recorremos el arreglo de recetas */} 
                    return (

                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." /> {/* Aquí se despliega el thumbnail de la receta */} 
                                <h5 className="card-title">{item.name}</h5> {/* Aquí se despliega el nombre de la receta */} 
                                <div className="card-body">                        
                                    <p>{item.process}</p>  {/* Aquí se despliegan las instrucciones de la receta */} 
                                </div>
                                <div className="d-flex justify-content-between mx-2 my-2"> 
                                    <div>
                                        <Link to={`/recipe/${item.uid}`} className="btn btn-outline-primary">
                                        CLICK TO VIEW   
                                        </Link>
                                    </div>
                                    <div> 
                                        <button onClick ={(e) => {actions.addfavorites(item.name)}} className="btn btn-outline-warning"><i className="fas fa-heart"></i></button>	
                                    </div>
                                </div>						  
                            </div>);
                            })};                
              </div>
            );
          })}		
        </div> 

      
      </div>
    </>
  );
};