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


    static async fetchStates() {
        
        const response = await api.get(
            `/states`
        );
        if (response != undefined && response.data[0] != undefined) {
            return response.data;
        }
        else {
            return null;
        }
    }

   

}

export default StatesContext;




