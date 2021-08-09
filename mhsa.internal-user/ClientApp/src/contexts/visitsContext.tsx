import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IVisits;
}

export interface IVisits {

        id_visita: any;

        id_usuario: any;

        tipo_usuario: any;

        fecha_visita: any;

        id_seccion: any;

}


export class VisitsContext {


    constructor() { }

 

    static async fetchVisits() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/visits`
        );
        console.log(response.data);
        return response.data;
        
    }



}

export default VisitsContext;




