import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IPaymentDetail;
}

export interface IPaymentDetail {

        Id_pago_detalle: any;

        Id_pago: any;

        Id_documento: any;

        Monto_pagado_documento: any;

}


export class PaymentDetailContext {


    constructor() { }



    static async fetchPaymentDetail() {
        let tkn = window.localStorage.getItem("currentDetailPayment") || "";
        let pmnt = JSON.parse(tkn).id_pago;
        const response = await api.post(
            `/paymentdetail`, { pmnt });
        if (response != undefined && response.data[0] != undefined) {
            return response.data;
        }
        else {
            return null;
        }
    }


    static async fetchPaymentDetailByProvider() {
        let tkn = window.localStorage.getItem("prvInf") || "";
        let prv;
        if (JSON.parse(tkn) != undefined) {
            prv = JSON.parse(tkn);
            const response = await api.post(
                `/paymentdetail/getByProvider`, { prv });
            if (response != undefined && response.data[0] != undefined) {
                return response.data;
            }
            else {
                return null;
            }
        }



    }

}

export default PaymentDetailContext;




