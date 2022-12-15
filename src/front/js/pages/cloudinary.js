import React, {useState, useEffect} from "react";
import { Context } from "../store/appContext";
import {AdvancedImage} from '@cloudinary/react';
// import { Cloudinary } from "@cloudinary/url-gen";

export const Cloudinary = () => { 
    const cloud = new subirCloud ({
        cloud: {
            cloudName: 'demo'
        }
    })


    return ( 
        <> 
        <h1>Vista de subir imagen en cloudinary</h1>
        
        
        </>
    )
}