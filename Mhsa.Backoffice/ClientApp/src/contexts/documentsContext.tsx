import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IDocuments;
}

export interface IDocuments {
        Id_documento: any;
        Id_proveedor: any;
        Id_tipo_documento: any;
        Letra_documento: any;
        Prefijo_documento: any;
        Numero_documento: any;
        Fecha_documento: any;
        Monto: any;
        Nota_pedido: any;
        Id_estado: any;
}


export class DocumentsContext {


    constructor() { }

    static allDocuments: any = DocumentsContext.fetchDocuments()
        .then(function (result: any) {
            DocumentsContext.allDocuments = result;
        })
        .catch((e: any) => {  });

    static async fetchDocuments() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/documents`
        );
        return response.data;
    }



}

export default DocumentsContext;




