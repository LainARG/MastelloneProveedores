import api from "../services/api";
import { AxiosResponse } from "axios";

interface Response {
    data: IDigitalDocuments;
}

export interface IDigitalDocuments {

        Id_documento_electronico: any;

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

        let providerCuit = window.localStorage.getItem("currentProvider") || "";
        let prv = JSON.parse(providerCuit).cuit;
        const response = await api.post(`/digitalDocuments/getById`, { prv });
        if (response.data != "") {
            return response.data;
        }
        else {
            return null;
        }
    }

    static async setDocument(files: any) {

        const response = await api.post<Response, AxiosResponse<Response>>(
            `/digitalDocuments/post`, files);
    }

}

export default DigitalDocumentsContext;




