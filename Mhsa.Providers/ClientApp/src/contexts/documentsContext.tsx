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
        Numero_pago: any;
        Letra_documento: any;
        Prefijo_documento: any;
        Numero_documento: any;
        Fecha_documento: any;
        Monto: any;
        Nota_pedido: any;
        Id_estado: any;
        estado: any;
        tipo: any;
        detalle_pago_monto: any;
}


export class DocumentsContext {


    constructor() { }

   
    static async fetchDocuments() {
        let prv: any = window.localStorage.getItem("prvInf");
        const response = await api.post(
            `/documents/getById`, { prv });
        return response.data;
    }



}

export default DocumentsContext;




