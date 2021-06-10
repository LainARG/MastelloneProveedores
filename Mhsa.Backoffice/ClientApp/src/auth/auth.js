import React from 'react';
import api from "../services/api";
import axios from 'axios';


export default function Auth() {

    const applicationParam = "WebProveedoresMH";
    const authUrl = "https://appsdesa.mastellone.com.ar:9993/auth";
    const returnUrl = "http://804f17e38691.ngrok.io/api/auth";
    const queryString = authUrl + "?returnurl=" + returnUrl + "&aplicacion=" + applicationParam;
    let token = window.localStorage.getItem("charg");
    console.log(token);


    function request() {
        window.localStorage.setItem("charg", 1);
        window.location.href = queryString;
        return (
            <div><h1>Auth redirect...</h1></div>
        );
    }

    async function getToken() {
        await api.get(`/auth/token`).then((response) => {
            console.log(atob(response.data));
            window.localStorage.removeItem("charg")
        });
    }
    
    if (token == undefined) {
        let req = request();
    } else {
        getToken();
    }
   

  






    return (
        <div><h1>Auth redirect...</h1></div>
        );

 }



