import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IPayments;
}

export interface IPayments {

         Id_pago: any;
         Tipo_pago: any;
         Estado_pago: any;
         Fecha_pago_retiro: any;
         Numero_pago: any;
         Direccion_retiro: any;
         Monto_bruto: any;
         Observaciones_pago: any;
         Id_factura: any;
         Id_proveedor: any;
         Id_documento: any;
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




