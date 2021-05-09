import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component, useContext, createContext } from 'react';

interface Response {
    data: IBills;
}

export interface IBills {

       Id_factura: any;
       Id_proveedor: any;
       Estado: any;
       Tipo: any;
       Numero_documento: any;
       Fecha_vencimiento: any;
       Fecha_emision: any;
         
}

 export class BillsContext{


     constructor() { }

    static allBills: any = BillsContext.fetchBills()
        .then(function (result: any) {
            BillsContext.allBills = result;
        })
        .catch((e: any) => { console.log(e) });;
   

    static async fetchBills(){
    const response = await api.get<Response, AxiosResponse<Response>>(
        `/bills`
    );
    return response.data;
    }


}

export default BillsContext;



    

        

    





