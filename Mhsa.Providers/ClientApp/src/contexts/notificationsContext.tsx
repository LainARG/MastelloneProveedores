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

 export class NotificationContext{


     constructor() { }
   

    static async setUserLogTime(){
        let id: any = window.localStorage.getItem("usrInf");
        const response: any = await api.post(
        `/users/setTimeLog`,{ id });
        if (response != undefined && response.data[0] != undefined && response.data[0] != [] && response.data[0] != "" && response.data[0] != " ") {
            return response.data;
        }
        else {
            return null;
        }
    }
 
  static async getNewness(){
       let id: any = window.localStorage.getItem("usrInf");
        const response: any = await api.post(
        `/users/getNewness`,{ id });
        if (response != undefined && response.data[0] != undefined && response.data[0] != [] && response.data[0] != "" && response.data[0] != " ") {
         console.log(response.data);            
         return response.data;
           
        }
        else {
            return null;
        }
    }


}

export default NotificationContext;





    

        

    





