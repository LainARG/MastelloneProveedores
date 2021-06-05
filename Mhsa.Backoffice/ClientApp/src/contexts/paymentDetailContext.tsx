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
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/paymentdetail`
        );
        return response.data;
    }



}

export default PaymentDetailContext;




