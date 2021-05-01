import React, { useEffect, useState } from 'react';
import '../resources/styles/documentSearchBody.css';
import { IoIosArrowBack } from "react-icons/io";
import { GrFormSchedule } from "react-icons/gr";
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import DocumentSearchResultBody from '../components/documentSearchResultBody';

export default function DocumentSearchBody() {
    
      
       
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
            <div className="documentSearchContainer">

                <div className="documentSearchBackContainer">
                    <IoIosArrowBack className="documentSearchBackIcon" />
                    <span className="documentSearchBackLegend">Volver</span>
                </div>


                <div className="documentSearchLegendContainer">
                    
                    <span className="documentSearchLegend">Consultar documentos electronicos</span>

                </div>

                <div className="documentSearchFormContainer">

                    <span className="documentSearchFormLegend">Nombre de archivo</span>
                    <input className="documentSearchFormInput"></input>


                </div>


                <div className="documentSearchFormContainer1">

                    <span className="documentSearchFormLegend1">Periodo</span>
                    <input className="documentSearchFormInput1" placeholder="DD/MM/AAAA"></input>
                    <GrFormSchedule className="documentSearchFormScheduleIcon" />

                </div>



                <div className="documentSearchFormContainer2">

                   
                    <input className="documentSearchFormInput2" placeholder="DD/MM/AAAA"></input>
                    <GrFormSchedule className="documentSearchFormScheduleIcon1" />

                </div>

                <div className="documentSearchFormContainer3">

                    <span className="documentSearchFormLegend3">Estado</span>
                    
                    <select className="documentSearchFormSelect">
                        <option selected value="Incorporado">Incorporado</option>
                    </select>

                </div>

                <div className="documentSearchFormBtnContainer">
                <ThemeProvider theme={theme}>
                <Button  color="primary" variant="contained" disableElevation >
                        Buscar
                 </Button>
                </ThemeProvider>
                </div>


                <div className="documentSearchResContainer">

                    <DocumentSearchResultBody/>

                </div>


            </div>
        );
    }
    


