import React, { useState, useEffect, Suspense} from 'react';
import '../resources/styles/portalHomeBody.css';
import UserDataComponent from './userDataComponent';
import UserContext from '../contexts/userContext';
import UsersAssignmentContext from '../contexts/usersAssignmentContexts';
import ProvidersContext from '../contexts/providersContext';

export default function IuPortalHomeBody() {

    const [user, setUser] = useState("");
    const [provider, setProvider] = useState("PROVEEDOR NO SELECCIONADO");
    const [userData, setUserData] = useState("");
    const [allUsers, setAllUsers] = useState("");
    const [allProviders, setAllProviders] = useState("");
    const [allUsersAssignment, setAllUsersAssignment] = useState("");



    useEffect(() => {

        GetProvider();

    }, []);


    function GetProvider() {
        setProvider(JSON.parse(window.localStorage.getItem("currentProvider")));
    }

    
   

        return (

            <div className="portalHomeContainer">

                <span className="portalHomeLegend1">!Hola! Te damos la bienvenida a nuestro Portal - Proveedores.</span>


                <UserDataComponent props={provider} />

            </div>
        );

    
}






