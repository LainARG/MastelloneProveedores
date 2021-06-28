import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';

interface Response {
    data: IUsersAssignment;
}

export interface IUsersAssignment{

        Id_usuario: any;

        Id_proveedor: any;

}


export class UsersAssignmentContext {


    constructor() { }

   
    static async fetchUsersAssignment() {
        const response = await api.get<Response, AxiosResponse<Response>>(
            `/usersassignment`
        );
        return response.data;
    }

}

export default UsersAssignmentContext;




