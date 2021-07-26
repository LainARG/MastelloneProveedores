import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IPaymentsForms;
}

export interface IPaymentsForms{

        Id_pagos_formas: any;

        Id_pago: any;

        Descripcion: any;

        Numero: any;

        Importe: any;

        Fecha_emision: any;

        Fecha_pago: any;

        Imagen: any;

}


export class PaymentsFormsContext {


    constructor() { }

 
    static async fetchPaymentsForms() {
        let tkn = window.localStorage.getItem("currentDetailPayment") || "";
        let pmnt = JSON.parse(tkn).id_pago;
        const response = await api.post(
            `/paymentsforms/getById`, { pmnt});

        return response.data;
    }



}

export default PaymentsFormsContext;




