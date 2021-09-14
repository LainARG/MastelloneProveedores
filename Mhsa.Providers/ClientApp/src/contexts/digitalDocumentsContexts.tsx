import api from "../services/api";
import { AxiosResponse } from "axios";

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

        Imagen: any;

        Estado: any;

        Usuario: any;

}


export class DigitalDocumentsContext {


    constructor() { }

   
    static async fetchDocuments() {
        let prv: any = window.localStorage.getItem("prvCuit");
        const response = await api.post(
            `/digitalDocuments/getById`, { prv });
        if (response != undefined && response.data[0] != undefined) {
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




