import React, { useEffect, useState } from 'react';
import '../resources/styles/documentSearchBody.css';
import { IoIosArrowBack } from "react-icons/io";
import { createMuiTheme } from '@material-ui/core/styles';
import { RiDeleteBin6Line } from "react-icons/ri";
import DigitalDocumentsContext from '../contexts/digitalDocumentsContexts';

export default function DocumentUploadBody() {
    
    const userId = 8;

    const [fileState, setFileState] = useState(null);


    useEffect(() => {
       
    }, fileState);




    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        }).then(
         
        );
    }

    function uploadFiles(e) {

        let files = [];
        let image64;

       
        for (let i = 0; i < e.length; i++) {
            let obj = {
                img: "",
                id: 0,
                name: "",
                date: "",
                type: "",
                size: ""
            }

            getBase64(e[i]).then((data) => {
                image64 = data.split("64,", 2);

                obj.date = e[i].lastModifiedDate;
                obj.id = userId;
                obj.type = e[i].type;
                obj.name = e[i].name;
                obj.size =  e[i].size;
                obj.img = image64[1];
                files.push(obj);
                if (i >= e.length - 1) {
                    setFileState(files);
                }
            }
           );
            
        }
        
    }

    function deleteSelectedFiles(e) {

        let files = [];

        for (let i = 0; i < fileState.length; i++) {

            files.push(fileState[i]);
        }
        for (let i = 0; i < files.length; i++) {

            if (e == files[i].name) {
                files.splice(i,1);
            }
        }
        setFileState(files);
    }
       

    function sendFiles(files) {
        DigitalDocumentsContext.setDocument(files);
    }

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

    function oknop() {
        let element = document.getElementById("inputFiles");
        element.click();
    }

    function Indicator() {
        
        if (fileState != null && fileState != undefined && fileState != "") {
            return (
                
                fileState.map((index) => (
                    <div className="documentUploadViewFileContainer">
                        <span className="documentUploadDescriptionFiles">{index.name}</span>
                        <RiDeleteBin6Line className="documentUploadDeleteIcon" onClick={(e) => deleteSelectedFiles(index.name) } />
                    </div>

                ))

            );
        } else {
            return(
                <div>

                </div>
                
                );
        }
    }


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
                <span className="documentUploadLegend4"><b>Peso soportado:</b> Hasta 1MB</span>

                <div className="documentUploadBtnContainer">


                    
                    <button className="documentUploadBtn" onClick={oknop}>
                        <input hidden className="inputUploadDigDoc" id="inputFiles" type="file" multiple onChange={(e) => uploadFiles(e.target.files)}></input>
                            Seleccionar mas archivos

                     </button>
                     
                   
                </div>

                <div className="documentUploadViewFileContainerContainer">
                <Indicator/>
               </div> 

                

                { /*<div className="documentUploadFailedUploadContainer">
                    <div>
                        <RiCloseFill className="documentUploadDeleteIcon1" />
                        <span className="documentUploadDescriptionFiles">"No se pudo seleccionar NOMBRE_DE_DOCUMENTO"</span>
                    </div>
                    <div>
                        <RiCloseFill className="documentUploadDeleteIcon1" />
                        <span className="documentUploadDescriptionFiles">"No se pudo seleccionar "NOMBRE_DE_DOCUMENTO"</span>
                    </div>
                </div>*/}
               
                
                <div className="documentUploadBtnContainer1">

                    <button className="documentUploadBtn1" onClick={() => sendFiles(fileState) }>
                        Subir documentacion
                     </button>

                </div>

            </div>
        );
    }
    


