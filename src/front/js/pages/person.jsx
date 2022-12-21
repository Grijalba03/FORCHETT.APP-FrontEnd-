
// import React, { useState, useEffect, useContext } from "react";
// import { Link, useParams } from "react-router-dom";

// import { Context } from "../store/appContext";

// export const Person = () => {
//     const { store, actions } = useContext(Context);
//     const router = useParams();
//     console.log(store.person);

//     useEffect(() => {
//         if (router.theid) {
//             actions.getCharacter(router.theid);
//         }
//     }, [router.theid]);

//     return (
//         <div className="container">
//             <div className="col-3">
//                 <img
//                     src={`https://starwars-visualguide.com/assets/img/person/${router?.theid}.jpg`}
//                     className="card-img-top w-75"
//                     alt="..."
//                 />
//             </div>
//             <p>name: {store.person?.name} </p>
//             <p>gender: {store.person?.gender} </p>
//             <p>height: {store.person?.height} </p>
//             <p>eye_color: {store.person?.eye_color} </p>
//             <p>hair_color: {store.person?.hair_color} </p>
//             <p>skin_color: {store.person?.skin_color} </p>
//             <p>mass: {store.person?.mass} </p>
//             <p>birth_year: {store.person?.birth_year} </p>
//             <p>homeworld: {store.person?.homeworld} </p>
//             <p>description: {store.person?.descripcion} </p>
//             <p>created: {store.person?.created} </p>
//             <p>edited: {store.person?.edited} </p>
//         </div>
//     );
// };