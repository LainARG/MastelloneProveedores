import api from "../services/api";
import { AxiosResponse } from "axios";






export class DigitalDocumentsRejectedContext {


    constructor() { }

    
    
    static async rejectDocuments(files: any) {

      await api.post(`/digitalDocumentsRejected/post`, files);

    }

}

export default DigitalDocumentsRejectedContext;




