import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component, useContext, createContext } from 'react';

interface Response {
    data: ITaxes;
}

export interface ITaxes {

        Id_impuesto: any;
        Concepto: any;
        Codigo_concepto: any;
        Numero_pago: any;
        Tipo_impuesto: any;
        Fecha_pago: any;
        Imagen: any;

}

 export class TaxesContext{


     constructor() { }


    static async fetchTaxes(){
    const response = await api.get<Response, AxiosResponse<Response>>(
        `/taxes`
        );
    return response.data;
    }


}

export default TaxesContext;



    

        

    





