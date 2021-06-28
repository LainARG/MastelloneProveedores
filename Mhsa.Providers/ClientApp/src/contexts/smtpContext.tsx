import api from "../services/api";
import { AxiosResponse } from "axios";
import React, { Component } from 'react';



export class SmtpContext {


    constructor() { }

    static async sendMail(msg: string) {
        await api.post(`/smtp/send`, { msg });
    }

}

export default SmtpContext;




