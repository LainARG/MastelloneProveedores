import React from 'react';
import api from "../services/api";
import axios from 'axios';


export default function Auth() {

    const applicationParam = "WebProveedoresMH";
    const authUrl = "https://appsdesa.mastellone.com.ar:9993/auth";
    const returnUrl = "http://139deb62c56e.ngrok.io/api/auth";
    const queryString = authUrl + "?returnurl=" + returnUrl + "&aplicacion=" + applicationParam;

    async function request() {

        window.location.href = queryString;
        console.log(queryString);
    }

    let result = request();

    return (
        <div>{ "lain" }</div>
        );

 }



