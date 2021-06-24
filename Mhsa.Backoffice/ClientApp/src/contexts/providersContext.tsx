import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IProviders;
}

export interface IProviders {

        Id_proveedor: any;

        Tipo_proveedor: any;

        Codigo_proveedor: any;

        Cuit: any;

        Razon_social: any;

        Domicilio: any;

        Localidad: any;

        Codigo_postal: any;

        Telefono: any;

}


export class ProvidersContext {


    constructor() { }

 

    static async fetchProviders() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/providers`
        );
        console.log(response.data);
        return response.data;
        
    }



}

export default ProvidersContext;




