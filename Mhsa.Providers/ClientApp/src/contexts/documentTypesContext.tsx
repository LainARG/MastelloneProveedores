import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IPaymentDetail;
}

export interface IPaymentDetail {

        Id_tipo_documento: any;

        Codigo_documento: any;

        Descripcion_abreviada: any;

        Descripcion: any;

        Signo: any;

}


export class DocumentTypesContext {


    constructor() { }

 

    static async fetchDocumentTypes() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/documentTypes`
        );
        return response.data;
    }


}

export default DocumentTypesContext;




