import api from "../services/api";
import { AxiosResponse } from "axios";

interface Response {
    data: IStateTypes;
}

export interface IStateTypes {

    Id_tipo_estado: any;

    Descripcion: any;

}

export class StateTypesContext {


    constructor() { }

    static allStateTypes: any = StateTypesContext.fetchStateTypes()
        .then(function (result: any) {
            StateTypesContext.allStateTypes = result;
        })
        .catch((e: any) => {  });

    static async fetchStateTypes() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/stateTypes`
        );
        return response.data;
    }

   

}

export default StateTypesContext;




