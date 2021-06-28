import React, { useEffect, useState } from 'react';
import '../resources/styles/documentSearchBody.css';
import { IoIosArrowBack } from "react-icons/io";
import { GrFormSchedule } from "react-icons/gr";
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import IuDocumentSearchResultBody from '../components/iuDocumentSearchResultBody';
import DigitalDocumentsContext from '../contexts/digitalDocumentsContexts';
import StatesContext from '../contexts/statesContext';
import StateTypesContext from '../contexts/stateTypesContext';

export default function DocumentSearchBody() {

    const [fileNameValue, setFileNameValue] = useState(null);
    const [sinceValue, setSinceValue] = useState(null);
    const [untilValue, setUntilValue] = useState(null);
    const [stateValue, setStateValue] = useState('Cualquiera');
    const [dataContext, setDataContext] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const [statesContext, setStatesContext] = useState(null);
    const [stateTypesContext, setStateTypesContext] = useState(null);

    useEffect(() => {
        if (dataContext == null || statesContext == null || stateTypesContext == null) {
            DigitalDocumentsContext.fetchDocuments().then((e) => { setDataContext(e); });
            StatesContext.fetchStates().then((e) => { setStatesContext(e); });
            StateTypesContext.fetchStateTypes().then((e) => { setStateTypesContext(e); });
        }
    }, []);


    function searchDigitalDocument() {

        

        let fileName = fileNameValue;
        let since = new Date(sinceValue).getTime();
        let until = new Date(untilValue).getTime();
        let state = stateValue;
        let arrayData = [];
        let searchState = [];
        


        for (let i = 0; i < dataContext.length; i++) {

            for (let j = 0; j < statesContext.length; j++) {
                if (statesContext[j].id_estado == dataContext[i].id_estado) {
                    searchState.push(statesContext[j].descripcion_abreviada);
                }
            }
           
            let obj = {
                filename: dataContext[i].nombre_archivo,
                date: new Date(dataContext[i].fecha_carga).getTime(),
                dateShow: dataContext[i].fecha_carga,
                state: searchState[i],
                type: dataContext[i].tipo_archivo,
                user: dataContext[i].id_usuario_carga,
                id_documento: dataContext[i].id_documento,
                image: dataContext[i].imagen
            }

            if (obj.filename.includes(fileName) && state == obj.state || obj.filename.includes(fileName) && state == "Cualquiera" || obj.date >= since && obj.date <= until && state == obj.state || obj.date >= since && obj.date <= until && state == "Cualquiera" || state == obj.state && fileName == null) {
                arrayData.push(obj);
            }

        }
        
        
        
        if (arrayData.length == 0 && state == "Cualquiera" && since == 0 && until == 0) {
            
            for (let i = 0; i < dataContext.length; i++) {

                let obj = {
                    filename: dataContext[i].nombre_archivo,
                    date: new Date(dataContext[i].fecha_carga).getTime(),
                    dateShow: dataContext[i].fecha_carga,
                    state: searchState[i],
                    user: dataContext[i].id_usuario_carga,
                    id_documento: dataContext[i].id_documento,
                    image: dataContext[i].imagen
                }
                arrayData.push(obj);

            }
           
        }

        let indexToRemove = [];
        let indexNotRemove = [];
            for (let i = 0; i < arrayData.length; i++) {
                for (let j = 0; j < arrayData.length; j++) {

                    if (arrayData[i].id_documento == arrayData[j].id_documento && i != j && !indexNotRemove.includes(j)) {
                            indexToRemove.push(j);
                            indexNotRemove.push(i);
                        }
                }
        }

        
        for (let i = 0; i < indexToRemove.length; i++) {
            for (let j = 0; j < arrayData.length; j++) {
                if (indexToRemove[i] == j ) {
                    delete arrayData[j];
                }
            }
        }

        setSearchResult(arrayData);
    }


    function DocumentSearch() {

        return (

          

            <IuDocumentSearchResultBody props={ searchResult } />

            
            
            );
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
                    <input id="documentSearchFormInput" className="documentSearchFormInput" onChange={ (e) => setFileNameValue(e.target.value) }></input>


                </div>


                <div className="documentSearchFormContainer1">

                    <span className="documentSearchFormLegend1">Periodo</span>
                    <input id="documentSearchFormInput1" className="documentSearchFormInput1" placeholder="AAAA/MM/DD" onChange={(e) => setSinceValue(e.target.value)}></input>
                    <GrFormSchedule className="documentSearchFormScheduleIcon" />

                </div>



                <div className="documentSearchFormContainer2">

                    <input id="documentSearchFormInput2" className="documentSearchFormInput2" placeholder="AAAA/MM/DD" onChange={(e) => setUntilValue(e.target.value)}></input>
                    <GrFormSchedule className="documentSearchFormScheduleIcon1" />

                </div>

                <div className="documentSearchFormContainer3">

                    <span className="documentSearchFormLegend3">Estado</span>
                    
                    <select className="documentSearchFormSelect" onChange={(e) => setStateValue(e.target.value)}>
                        <option selected value="Cualquiera">Cualquiera</option>
                        <option value="Incorporado">Incorporado</option>
                        <option value="Recepcionado">Recepcionado</option>
                        <option value="Rechazado">Rechazado</option>
                    </select>

                </div>

                <div className="documentSearchFormBtnContainer">
                <ThemeProvider theme={theme}>
                        <Button color="primary" variant="contained" disableElevation onClick={ searchDigitalDocument }>
                        Buscar
                 </Button>
                </ThemeProvider>
                </div>


                <div className="documentSearchResContainer">

                    <DocumentSearch/>

                </div>


            </div>
        );
    }
    


