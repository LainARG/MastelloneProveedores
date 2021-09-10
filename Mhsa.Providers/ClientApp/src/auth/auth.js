import React, { useState, useEffect } from 'react';
import api from "../services/api";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import ProvidersContext from '../contexts/providersContext';
import UsersAssignmentContext from '../contexts/usersAssignmentContexts';
import UserContext from '../contexts/userContext';
import NotificationContext from '../contexts/notificationsContext';


export default function Auth() {


    const applicationParam = "WebProveedoresMH";
    const authUrl = "https://appsdesa.mastellone.com.ar:9993/auth";
    const returnUrl = "http://15fb-201-213-211-124.ngrok.io/api/auth";
    const queryString = authUrl + "?returnurl=" + returnUrl + "&aplicacion=" + applicationParam;
    let [allProviders, setAllProviders] = useState("");
    let [allUsers, setAllUsers] = useState("");
    let [allUsersAssignment, setAllUsersAssignment] = useState("");


    useEffect(() => {

        if (allUsers == "") {
            UserContext.fetchUsers().then((e) => { setAllUsers(e) });
        }
        else if (allUsersAssignment == "" && allUsersAssignment != null) {
            UsersAssignmentContext.fetchUsersAssignment().then((e) => { setAllUsersAssignment(e) });
        }
        else if (allProviders == "") {
            ProvidersContext.fetchProviders().then((e) => { setAllProviders(e) });
        }

        else {
            if (window.localStorage.getItem("tkn") == "" || window.localStorage.getItem("tkn") == undefined) {
                localStorage.setItem("tkn", 1);
                request();
            } else {
                getToken();
            }
        }

    }, [allUsers, allProviders, allUsersAssignment]);


    function request() {
        window.location.href = queryString;
    }

    function InvalidUser() {
        return (
            <div>
                <h1>Usuario no autorizado!</h1>
            </div>
        );
    }

    async function getToken() {

        await api.get(`/auth/token`).then((response) => {
            let converted = response.data;
            if (converted != "") {
                let permissions = (jwt_decode(converted)).Funciones;
                let splited = (jwt_decode(converted)).unique_name;
                let currentUser;
                let currentIdProvider;
                let currentCuitProvider;
                let currentNameProvider;
                
                if (splited.includes("go_") && splited.includes("@")) {/*if google service*/
                    splited = splited.substring(3, splited.length);
                    let currentUs = allUsers.filter(user => user.mail == splited);
                    if (currentUs[0] != undefined && currentUs[0] != "" && currentUs[0] != null) {
                        currentUser = currentUs[0].id_usuario;
                    }
                    let currentIdProv = allUsersAssignment.filter(userAssign => userAssign.id_usuario == currentUser);
                    if (currentIdProv[0] != undefined && currentIdProv[0] != "" && currentIdProv[0] != null) {
                        currentIdProvider = currentIdProv[0].id_proveedor;
                    }
                    let currentCuitProv = allProviders.filter(provider => provider.id_proveedor == currentIdProvider);
                    if (currentCuitProv[0] != undefined && currentCuitProv[0] != "" && currentCuitProv[0] != null) {
                        currentCuitProvider = currentCuitProv[0].cuit;
                        currentNameProvider = currentCuitProv[0].razon_social;
                    }
                }
                
             if (currentUser != undefined && currentIdProvider != undefined) {
                    window.localStorage.setItem("tknUsr", splited);
                    window.localStorage.setItem("tknPms", permissions);
                    window.localStorage.setItem("usrInf", currentUser);
                    window.localStorage.setItem("prvInf", currentIdProvider);
                    window.localStorage.setItem("prvCuit", currentCuitProvider);
                    window.localStorage.setItem("prvName", currentNameProvider);
                    NotificationContext.getNewness().then((data)=>{
                    window.localStorage.setItem("prvNns", JSON.stringify(data));
                    });
                    localStorage.setItem("tkn", "");
                    NotificationContext.setUserLogTime();
                   
                    window.location.href = "/portal/providers";
             }
             else {
                    localStorage.setItem("tkn", "");
                    console.log(currentUser);
                    console.log(currentIdProvider);
                   
            }
            }
            else {
                localStorage.setItem("tkn", "");
                window.location.href = "/auth";
            }
        });
    }
  
    
    return(<h1>Authenticating...</h1>)

 }



