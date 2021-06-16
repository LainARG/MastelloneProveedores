import React, { useState, useEffect } from 'react';
import api from "../services/api";
import axios from 'axios';
import jwt_decode from "jwt-decode";



export default function Auth() {


    const applicationParam = "WebProveedoresMH";
    const authUrl = "https://appsdesa.mastellone.com.ar:9993/auth";
    const returnUrl = "http://a257cbeb56c8.ngrok.io/api/auth";
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
            let splited = JSON.stringify(jwt_decode(converted));
            let permissionsStart = splited.indexOf("IdFuncion", 0);
            let permissionsEnd = splited.indexOf("nbf\":", 0);
            let permissions = splited.substring(permissionsStart, permissionsEnd);

            if (splited.includes("go_") && splited.includes("@")) {/*if google service*/
                splited = splited.split("go_", 100);
                let indexSplited = splited[1].indexOf("\"", 0);
                splited = splited[1].substring(0, indexSplited);
            }

            



            window.localStorage.setItem("tknUsr", splited);
            window.localStorage.setItem("tknPms", permissions);
            setState(0);
        });
    }
  
    
    return(<h1>Authentincating...</h1>)

 }



