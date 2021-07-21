import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IPayments;
}

export interface IPayments {

         Id_pago: any;
         Id_proveedor: any;
         Id_estado: any;
         Prefijo_pago: any;
         Numero_pago: any;
         Total_pago: any;
         Fecha_disponible: any;
         Lugar_retiro: any;

}


export class PaymentsContext {


    constructor() { }

 

    static async fetchPayments() {
        let prv: any = window.localStorage.getItem("prvInf");
        console.log(prv);
        const response = await api.post(
            `/payments/getById`, {prv} );
        return response.data;
    }



}

export default PaymentsContext;




