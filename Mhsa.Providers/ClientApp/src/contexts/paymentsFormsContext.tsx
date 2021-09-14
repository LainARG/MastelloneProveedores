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

    static async fetchAllPaymentsForms() {
        let tkn = window.localStorage.getItem("prvInf") || "";
        let prv;
        if (JSON.parse(tkn) != undefined) {
            prv = JSON.parse(tkn);
            const response = await api.post(
                `/paymentsforms/getAllByProviderId`, { prv });
            console.log(response.data);
            if (response != undefined && response.data[0] != undefined) {
                return response.data;
            }
            else {
                return null;
            }
        }
    }

    static async fetchPaymentsForms() {
        let tkn = window.localStorage.getItem("currentDetailPayment") || "";
        let pmnt;
        if (JSON.parse(tkn).id_pago != undefined) {
            pmnt = JSON.parse(tkn).id_pago;
            const response = await api.post(
                `/paymentsforms/getById`, { pmnt });
            if (response != undefined && response.data[0] != undefined) {
                return response.data;
            }
            else {
                return null;
            }
        }
    }



}

export default PaymentsFormsContext;




