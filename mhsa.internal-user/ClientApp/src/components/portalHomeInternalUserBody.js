import React, { useState, useEffect, Suspense} from 'react';
import '../resources/styles/portalHomeBody.css';
import UserDataComponent from './userDataComponent';
import UserContext from '../contexts/userContext';
import UsersAssignmentContext from '../contexts/usersAssignmentContexts';
import ProvidersContext from '../contexts/providersContext';

export default function PortalHomeInternalUserBody() {

    const [user, setUser] = useState("");
    const [provider, setProvider] = useState("");
    const [userData, setUserData] = useState("");
    const [allUsers, setAllUsers] = useState("");
    const [allProviders, setAllProviders] = useState("");
    const [allUsersAssignment, setAllUsersAssignment] = useState("");



    useEffect(() => {

        if (allUsers == "") {
            UserContext.fetchUsers().then((e) => {
                setAllUsers(e);
            });
            ProvidersContext.fetchProviders().then((e) => {
                setAllProviders(e);
            });
            UsersAssignmentContext.fetchUsersAssignment().then((e) => {
                setAllUsersAssignment(e);
            });

        } else {
            GetToken();
        }
    }, [allUsers, allProviders, allUsersAssignment]);


    const GetToken = () => {
        let tokenUser = window.localStorage.getItem("tknUsr");
        let userId = 0;
        let providerId = 0;
        let userDat = {
            nombre: null,
            razon_social: null,
            cuit: null,
            domicilio: null,
            localidad: null,
            codigo_postal: null,
            telefono: null
        }
        
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].mail == tokenUser) {
                setUser(allUsers[i]);
                userId = allUsers[i].id_usuario;
            }

            for (let i = 0; i < allUsersAssignment.length; i++) {

                if (allUsersAssignment[i].id_usuario == userId) {
                    providerId = allUsersAssignment[i].id_proveedor;
                }

            }
            for (let i = 0; i < allProviders.length; i++) {

                if (allProviders[i].id_proveedor == providerId) {

                    setProvider(allProviders[i]);

                    userDat.nombre = user.mail;
                    userDat.razon_social = provider.razon_social;
                    userDat.cuit = provider.cuit;
                    userDat.domicilio = provider.domicilio;
                    userDat.localidad = provider.localidad;
                    userDat.codigo_postal = provider.codigo_postal;
                    userDat.telefono = provider.telefono;
                    setUserData(userDat);
                }
            }


        }
        

        

    }

    
    

        return (

            <div className="portalHomeContainer">

                <span className="portalHomeLegend1">!Hola! Te damos la bienvenida a nuestro Portal - Usuarios.</span>
                <br />
                <span className="portalHomeLegend2">Para comenzar, selecciona tu ingreso a la plataforma desde la barra del menu.</span>

            </div>
        );

    
}






