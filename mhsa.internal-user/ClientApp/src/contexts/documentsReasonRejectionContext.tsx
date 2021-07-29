import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IDocuments;
}

export interface IDocuments {
      Codigo_motivo_rechazo: any;
      Descripcion_rechazo: any;
}


export class DocumentsReasonRejectionContext {


    constructor() { }

   
    static async fetchDocumentsReasonRejection() {
        const response = await api.get<Response, AxiosResponse<Response>>(`/documentsReasonRejection`);
        return response.data;
    }



}

export default DocumentsReasonRejectionContext;




