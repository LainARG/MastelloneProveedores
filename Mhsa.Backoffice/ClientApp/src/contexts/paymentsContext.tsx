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

    static allPayments: any = PaymentsContext.fetchPayments()
        .then(function (result: any) {
            PaymentsContext.allPayments = result;
        })
        .catch((e: any) => { console.log(e) });

    static async fetchPayments() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/payments`
        );
        return response.data;
    }



}

export default PaymentsContext;




