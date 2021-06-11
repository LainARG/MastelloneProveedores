import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component, useContext, createContext } from 'react';

interface Response {
    data: IUser;
}

export interface IUser {
    Id_usuario: string;
    Nombre: string;
    Apellido: string;
    Tipo: string;
    Domicilio: string;
    Localidad: string;
    Codigo_postal: string;
    Telefono: string;
    Mail: string;
    Fecha_registro: string;
    Fecha_ult_ingreso: string;
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



    

        

    





