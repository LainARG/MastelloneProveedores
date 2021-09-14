import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component, useContext, createContext } from 'react';

interface Response {
    data: IUser;
}

export interface IUser {
    Id_usuario: any;
    Tipo: any;
    Mail: any;
    Fecha_registro: any;
    Fecha_ult_ingreso: any;
}

 export class UserContext{


     constructor() { }
   

    static async fetchUsers(){
    const response: any = await api.get<Response, AxiosResponse<Response>>(
        `/users`
    );
        if (response != undefined && response.data[0] != undefined && response.data[0] != [] && response.data[0] != "" && response.data[0] != " ") {
            return response.data;
        }
        else {
            return null;
        }
    }


}

export default UserContext;





    

        

    





