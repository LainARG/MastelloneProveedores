import React, { useEffect, useState } from 'react';
import '../resources/styles/documentSearchBody.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { GrDocumentDownload } from "react-icons/gr";


export default function DocumentSearchResultBody(props) {
    
    const [showData, setShowData] = useState(props);

    useEffect(() => {

        console.log(showData);

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

    function ShowDataResult() {

        if (showData.props != undefined && showData.props != null && showData.props != "") {

            return (
                showData.props.map((index) => (
                    <div className="documentSearchResultResultsContainer">

                        <span className="documentSearchResultLegend5">{ index.fecha_carga}</span>
                        <span className="documentSearchResultLegend6">{index.id_estado}</span>
                        <span className="documentSearchResultLegend7">{index.id_usuario_carga}</span>
                        <GrDocumentDownload className="documentSearchResultIcon" />

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
    


