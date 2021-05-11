import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IDigitalDocuments;
}

export interface IDigitalDocuments {

       Id_documento: any;

       Nombre_de_archivo: any;

       Estado: any;

       Tipo: any;

       Observaciones: any;

       Numero_documento: any;

       Id_usuario_carga: any;

       Fecha_de_carga: any;

       Fecha_ult_modificacion: any;
}


export class DigitalDocumentsContext {


    constructor() { }

    static allDigitalDocuments: any = DigitalDocumentsContext.fetchDocuments()
        .then(function (result: any) {
            DigitalDocumentsContext.allDigitalDocuments = result;
        })
        .catch((e: any) => { console.log(e) });

    static async fetchDocuments() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/digitalDocuments`
        );
        return response.data;
    }



}

export default DigitalDocumentsContext;



