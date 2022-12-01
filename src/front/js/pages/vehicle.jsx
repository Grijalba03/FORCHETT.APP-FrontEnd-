// import React, { useState, useEffect, useContext } from "react";
// import { Link, useParams } from "react-router-dom";

// import { Context } from "../store/appContext";

// export const Vehicle = () => {
//     const { store, actions } = useContext(Context);
//     const router = useParams();
//     console.log(store.vehicle);

//     useEffect(() => {
//         if (router.theid) {
//             actions.getVehicle(router.theid);
//         }
//     }, [router.theid]);

//     return (
//         <div className="container">
//             <img
//                 src={`https://starwars-visualguide.com/assets/img/vehicles/${router?.theid}.jpg`}
//                 className="card-img-top w-25"
//                 alt="..."
//             />

//             <p>name: {store.vehicle?.name} </p>
//             <p>cargo_capacity: {store.vehicle?.cargo_capacity} </p>
//             <p>consumables: {store.vehicle?.consumables} </p>
//             <p>cost_in_credits: {store.vehicle?.cost_in_credits} </p>
//             <p>created: {store.vehicle?.created} </p>
//             <p>model: {store.vehicle?.model} </p>
//             <p>crew: {store.vehicle?.crew} </p>
//             <p>length: {store.vehicle?.length} </p>
//             <p>manufacturer: {store.vehicle?.manufacturer} </p>
//             <p>max_atmosphering_speed: {store.vehicle?.max_atmosphering_speed} </p>
//             <p>description: {store.vehicle?.descripcion} </p>
//             <p>pilots: {store.vehicle?.pilots} </p>
//             <p>passengers: {store.vehicle?.passengers} </p>
//             <p>vehicle_class: {store.vehicle?.vehicle_class} </p>
//         </div>
//     );
// };
