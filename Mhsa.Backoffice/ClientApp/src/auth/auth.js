import React from 'react';
import api from "../services/api";


export default function Auth() {

    const applicationParam = "WebProveedoresMH";
    const authUrl = "https://appsdesa.mastellone.com.ar:9993/auth";
    const tokenReturnUrlParam = "";
    const queryString = authUrl + "?returnurl=" + tokenReturnUrl + "&aplicacion=" + applicationParam;

    /*static async request() {

      const response = await api.get<Response>(queryString);
      return response.data;
    }*/




 }



