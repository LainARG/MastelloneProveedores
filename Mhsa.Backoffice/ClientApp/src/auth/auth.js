import React, { useState, useEffect } from 'react';
import api from "../services/api";
import axios from 'axios';



export default function Auth() {


    const applicationParam = "WebProveedoresMH";
    const authUrl = "https://appsdesa.mastellone.com.ar:9993/auth";
    const returnUrl = "http://804f17e38691.ngrok.io/api/auth";
    const queryString = authUrl + "?returnurl=" + returnUrl + "&aplicacion=" + applicationParam;
    const [state, setState] = useState(null);

    useEffect(() => {

        
        if (window.localStorage.getItem("tkn") == undefined || window.localStorage.getItem("tkn") == ""){
            request();
        } else if (window.localStorage.getItem("tkn") == 0) {
            getToken();
        } else {
            window.location.href = "/portal/providers";
        }

    }, [state]);

    function request() {
        window.location.href = queryString;
        window.localStorage.setItem("tkn",0);
    }

    async function getToken() {
        await api.get(`/auth/token`).then((response) => {
            let converted = response.data.toString().replaceAll("_", "");
            converted = converted.replaceAll("-", "");
            converted = converted.replaceAll(".", "");
            converted = converted.replaceAll(" ", "");
            /*let splited = converted.toString().split(":");*/
            window.localStorage.setItem("tkn", atob(converted));;
            setState(0);
        });
    }
  
    
    return(<h1>Authentincating...</h1>)

 }



