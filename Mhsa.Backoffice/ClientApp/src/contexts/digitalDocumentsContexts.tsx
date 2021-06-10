import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IDigitalDocuments;
}

export interface IDigitalDocuments {

        Id_documento: any;

        Id_usuario_carga: any;

        Id_rechazo: any;

        Nombre_archivo: any;
     
        Cuit: any;

        Tipo_archivo: any;

        Id_estado: any;

        Fecha_carga: any;

        Hora_carga: any;

        Fecha_estado: any;

        Tamano_archivo :any;

        Imagen :any;
}


export class DigitalDocumentsContext {


    constructor() { }

   
    static async fetchDocuments() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/digitalDocuments`
        );
        return response.data;
    }

    static async setDocument(files: any) {

        let json = JSON.stringify(files);
        const response = await api.post<Response, AxiosResponse<Response>>(
            `/digitalDocuments/post`, files);
    }

}

export default DigitalDocumentsContext;




