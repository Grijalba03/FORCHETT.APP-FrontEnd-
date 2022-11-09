import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planet = () => {
    const { store, actions } = useContext(Context);
    const router = useParams();
    console.log(store.planet);

    useEffect(() => {
        if (router.theid) {
            actions.getPlanet(router.theid);
        }
    }, [router.theid]);

    return (
        <div className="container">
            <div className="col-3"></div>
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${router?.theid}.jpg`}
                className="card-img-top w-25"
                alt="..."
            />

            <p>name: {store.planet?.name} </p>
            <p>diameter: {store.planet?.diameter} </p>
            <p>climate: {store.planet?.climate} </p>
            <p>gravity: {store.planet?.gravity} </p>
            <p>population: {store.planet?.population} </p>
            <p>terrain: {store.planet?.terrain} </p>
            <p>orbital_period: {store.planet?.orbital_period} </p>
            <p>rotation_period: {store.planet?.rotation_period} </p>
            <p>surface_water: {store.planet?.surface_water} </p>
            <p>residents: {store.planet?.residents} </p>
            <p>created: {store.planet?.created} </p>
            <p>edited: {store.planet?.edited} </p>
        </div>
    );
};
