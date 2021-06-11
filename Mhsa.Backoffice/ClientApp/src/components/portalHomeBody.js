import React, { useState, useEffect} from 'react';
import '../resources/styles/portalHomeBody.css';
import UserDataComponent from './userDataComponent';
import UserContext from '../contexts/userContext';

export default function PortalHomeBody(){

    const [user, setUser] = useState(null);
    const [allUsers, setAllUsers] = useState(null);

    useEffect(() => {
        
        if (allUsers == null) {
            UserContext.fetchUsers().then((e) => {
                setAllUsers(e);
            });
        } else {
            getToken();
        }
       
    });


    function getToken() {
        let token = window.localStorage.getItem("tkn");
        let splited = token.split("go_", 1000);
        splited = splited[1].split(",", 1000);
        splited = splited[0].replaceAll("\"", "");

        for (let i = 0; i < allUsers.length; i++) {

            if (allUsers[i].mail == splited) {
                setUser(allUsers[i]);
                console.log(user);
            }

        }
        
    }
    if (user) {
        return (

            <div className="portalHomeContainer">

                <span className="portalHomeLegend1">!Hola! Te damos la bienvenida a nuestro portal.</span>

                <span className="portalHomeLegend2">Para comenzar, seleccioná tu ingreso a la plataforma desde la barra del Menu.</span><br /><br /><br />

                <UserDataComponent props={user} />

            </div>


        );
    }else {
        return (<div>Cargando user...</div>);
    }
 
}




