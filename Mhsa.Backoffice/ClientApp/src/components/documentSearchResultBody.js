import React, { useEffect, useState } from 'react';
import '../resources/styles/documentSearchBody.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { GrDocumentDownload } from "react-icons/gr";


export default function DocumentSearchResultBody(props) {
    
    const [showData, setShowData] = useState(props);
    const filesToDownload = new Array(props.length);

    useEffect(() => {

        

    }, [showData]);

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

    function prepareBase64File(contentType, base64Data, fileName, index) {
        const linkSource = `data:${contentType};base64,${base64Data}`;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        filesToDownload[index] = downloadLink;
    }

    function downloadBase64File(index) {
        
        filesToDownload[index].click();
    }



    function ShowDataResult() {

        if (showData.props != undefined && showData.props != null && showData.props != "") {

            
            return (
                showData.props.map((index,i) => (
                    <div className="documentSearchResultResultsContainer">

                        <span className="documentSearchResultLegend5">{index.dateShow}</span>
                        <span className="documentSearchResultLegend6">{index.state}</span>
                        <span className="documentSearchResultLegend7">{index.user}</span>
                        <GrDocumentDownload className="documentSearchResultIcon" onChange={prepareBase64File(index.type, index.image, index.filename, i)} onClick={(e) => downloadBase64File(i)} />

                    </div>

                )));

        } else {
            return (
                <div className="documentSearchResult404">
                    <br />
                    <br />
                    <br />
                    <span><b>No se encontraron resultados o el campo de busqueda esta vacio... !Proba con otra consulta!</b></span>

                </div>

            );
        }


        
    }


      
        return (
            <div className="documentSearchResultContainer">

               
                    
               <span className="documentSearchResultLegend">Resultados:</span>

                


                <div className="documentSearchResultLegendContainer">

                    <span className="documentSearchResultLegend1">Fecha de carga</span>
                    <span className="documentSearchResultLegend2">Estado</span>
                    <span className="documentSearchResultLegend3">Cargado por</span>
                    <span className="documentSearchResultLegend4">Descarga</span>

                </div>

               <ShowDataResult/>

                
            

            </div>
        );
    }
    


