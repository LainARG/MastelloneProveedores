import React, { useState, useEffect } from 'react';
import api from "../services/api";
import axios from 'axios';
import jwt_decode from "jwt-decode";



export default function Auth() {


    const applicationParam = "WebProveedoresMH";
    const authUrl = "https://appsdesa.mastellone.com.ar:9993/auth";
    const returnUrl = "http://a0fc1694e258.ngrok.io/api/auth";
    const queryString = authUrl + "?returnurl=" + returnUrl + "&aplicacion=" + applicationParam;
    const [state, setState] = useState(null);

    useEffect(() => {

        
        if (window.localStorage.getItem("tknUsr") == undefined || window.localStorage.getItem("tknUsr") == ""){
            request();
        } else if (window.localStorage.getItem("tknUsr") == 0) {
            getToken();
        } else {
            window.location.href = "/portal/providers";
            
        }

    }, [state]);

    function request() {
        window.location.href = queryString;
        window.localStorage.setItem("tknUsr",0);
    }

    async function getToken() {
        await api.get(`/auth/token`).then((response) => {
            let converted = response.data.toString();
            let permissions = (jwt_decode(converted)).Funciones;
            let splited = (jwt_decode(converted)).unique_name;

            if (splited.includes("go_") && splited.includes("@")) {/*if google service*/
                splited = splited.substring(3, splited.length);
            }

            
            window.localStorage.setItem("tknUsr", splited);
            window.localStorage.setItem("tknPms", permissions);
            setState(0);
        });
    }
  
    
    return(<h1>Authentincating...</h1>)

 }



