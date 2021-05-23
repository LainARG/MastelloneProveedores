import api from "../services/api";
import { AxiosResponse } from "axios";

interface Response {
    data: IStates;
}

export interface IStates {

        Id_estado: any;

        Id_tipo_estado: any;

        Descripcion_abreviada: any;

        Descripcion: any;
}


export class StatesContext {


    constructor() { }

    static allStates: any = StatesContext.fetchStates()
        .then(function (result: any) {
            StatesContext.allStates = result;
        })
        .catch((e: any) => {  });

    static async fetchStates() {
        
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/states`
        );
        return response.data;
    }

   

}

export default StatesContext;




