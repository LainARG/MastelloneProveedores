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
    const response = await api.get<Response, AxiosResponse<Response>>(
        `/users`
    );
    return response.data;
    }


}

export default UserContext;



    

        

    





