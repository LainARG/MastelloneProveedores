import React, { useEffect, useState } from 'react';
import '../resources/styles/documentSearchBody.css';
import { IoIosArrowBack } from "react-icons/io";
import { createMuiTheme } from '@material-ui/core/styles';
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

export default function DocumentUploadBody() {
    
    

    const theme = createMuiTheme({
        
        palette: {
            primary: {
                main: '#009639',
            },
            secondary: {
                main: '#009639',
            },
        },
    });

      
        return (
            <div className="documentUploadContainer">

                <div className="documentSearchBackContainer">
                    <IoIosArrowBack className="documentSearchBackIcon" />
                    <span className="documentSearchBackLegend">Volver</span>
                </div>

                <div className="documentUploadLegendsContainer">
                <span className="documentUploadLegend">Cargar documentos electronicos</span>
                </div>

                <span className="documentUploadLegend3">Incorporar unicamente documentos de pago.</span>
                <span className="documentUploadLegend1">Cualquier otra documentacion, enviarla por mail al sector correspondiente.</span>
                <span className="documentUploadLegend2"><b>Formato habilitado:</b> PDF</span>
                <span className="documentUploadLegend1"><b>Peso soportado:</b> hasta 1MB</span>

                <div className="documentUploadBtnContainer">
                   
                     <button className="documentUploadBtn">
                            Seleccionar mas archivos
                     </button>
                   
                </div>

                <div className="documentUploadViewFileContainer">
                    <span className="documentUploadDescriptionFiles">nombre_de_documento_subido</span>
                    <RiDeleteBin6Line className="documentUploadDeleteIcon" />
                </div>
                <div className="documentUploadViewFileContainer">
                    <span className="documentUploadDescriptionFiles">nombre_de_documento_subido</span>
                    <RiDeleteBin6Line className="documentUploadDeleteIcon" />
                </div>
                <div className="documentUploadViewFileContainer">
                    <span className="documentUploadDescriptionFiles">nombre_de_documento_subido</span>
                    <RiDeleteBin6Line className="documentUploadDeleteIcon" />
                </div>
                <div className="documentUploadViewFileContainer">
                    <span className="documentUploadDescriptionFiles">nombre_de_documento_subido</span>
                    <RiDeleteBin6Line className="documentUploadDeleteIcon" />
                </div>

                <div className="documentUploadFailedUploadContainer">
                    <div>
                    <RiCloseFill className="documentUploadDeleteIcon1" />
                        <span className="documentUploadDescriptionFiles">"No se pudo seleccionar NOMBRE_DE_DOCUMENTO"</span>
                    </div>
                    <div>
                    <RiCloseFill className="documentUploadDeleteIcon1" />
                        <span className="documentUploadDescriptionFiles">"No se pudo seleccionar "NOMBRE_DE_DOCUMENTO"</span>
                    </div>
                </div>
               

                <div className="documentUploadBtnContainer1">

                    <button className="documentUploadBtn1">
                        Subir documentacion
                     </button>

                </div>

            </div>
        );
    }
    


