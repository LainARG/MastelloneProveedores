import React, { useState, useEffect } from 'react';
import api from "../services/api";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import ProvidersContext from '../contexts/providersContext';
import UsersAssignmentContext from '../contexts/usersAssignmentContexts';
import UserContext from '../contexts/userContext';


export default function Auth() {


    const applicationParam = "WebProveedoresMH";
    const authUrl = "https://appsdesa.mastellone.com.ar:9993/auth";
    const returnUrl = "http://69f36f581f37.ngrok.io/api/auth";
    const queryString = authUrl + "?returnurl=" + returnUrl + "&aplicacion=" + applicationParam;
    let [allProviders, setAllProviders] = useState("");
    let [allUsers, setAllUsers] = useState("");
    let [allUsersAssignment, setAllUsersAssignment] = useState("");


    useEffect(() => {

        if (allUsers == "") {
            UserContext.fetchUsers().then((e) => { setAllUsers(e) });
        }
        else if (allUsersAssignment == "") {
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

    async function getToken() {

        await api.get(`/auth/token`).then((response) => {
            let converted = response.data;
            if (converted != "") {
                let permissions = (jwt_decode(converted)).Funciones;
                let splited = (jwt_decode(converted)).unique_name;
                let currentUser;
                let currentProvider;
                
                if (splited.includes("go_") && splited.includes("@")) {/*if google service*/
                    splited = splited.substring(3, splited.length);
                    currentUser = allUsers.filter(user => user.mail == splited)[0].id_usuario;
                    currentProvider = allUsersAssignment.filter(userAssign => userAssign.id_usuario == currentUser)[0].id_proveedor;
                }
                if (splited.includes("fb_") && splited.includes("@")) {/*if facebook service*/
                    splited = splited.substring(3, splited.length);
                    currentUser = allUsers.filter(user => user.mail == splited)[0].id_usuario;
                }

                window.localStorage.setItem("tknUsr", splited);
                window.localStorage.setItem("tknPms", permissions);
                window.localStorage.setItem("usrInf", currentUser);
                window.localStorage.setItem("prvInf", currentProvider);
                localStorage.setItem("tkn", "");
                window.location.href = "/portal/providers";
            }
            else{
                localStorage.setItem("tkn", "");
                window.location.href = "/auth";
            }
        });
    }
  
    
    return(<h1>Authenticating...</h1>)

 }



