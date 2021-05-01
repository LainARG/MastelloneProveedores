import React, { useEffect, useState } from 'react';
import '../resources/styles/documentSearchBody.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { GrDocumentDownload } from "react-icons/gr";


export default function DocumentSearchResultBody() {
    
      
       
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
            <div className="documentSearchResultContainer">

               
                    
               <span className="documentSearchResultLegend">Resultados:</span>

                


                <div className="documentSearchResultLegendContainer">

                    <span className="documentSearchResultLegend1">Fecha de carga</span>
                    <span className="documentSearchResultLegend2">Estado</span>
                    <span className="documentSearchResultLegend3">Cargado por</span>
                    <span className="documentSearchResultLegend4">Descarga</span>

                </div>

                <div className="documentSearchResultResultsContainer">

                    <span className="documentSearchResultLegend5">12/04/1991</span>
                    <span className="documentSearchResultLegend6">Recepcionado</span>
                    <span className="documentSearchResultLegend7">Terry Wagner</span>
                    <GrDocumentDownload className="documentSearchResultIcon" />

                </div>



                
                <div className="documentSearchResult404">
                    <br />
                    <br />
                    <br />
                    <span><b>No se encontraron resultados... !Proba con otra consulta!</b></span>
                   
                </div>


            </div>
        );
    }
    


