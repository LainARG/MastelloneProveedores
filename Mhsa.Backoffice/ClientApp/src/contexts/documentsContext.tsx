import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IDocuments;
}

export interface IDocuments {
    Id: any;
    Nombre: any;
    Nombre_usuario_carga: any;
    Tipo: any;
    Estado: any;
    Observaciones: any;
    Numero_documento: any;
    Fecha_de_carga: any;
    id_usuario_carga: any;
}


export class DocumentsContext {


    constructor() { }

    static allDocuments: any = DocumentsContext.fetchDocuments()
        .then(function (result: any) {
            DocumentsContext.allDocuments = result;
        })
        .catch((e: any) => { console.log(e) });

    static async fetchDocuments() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/documents`
        );
        return response.data;
    }



}

export default DocumentsContext;




