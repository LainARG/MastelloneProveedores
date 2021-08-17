import React, { useEffect, useState } from 'react';
import '../resources/styles/documentBody.css';
import '../resources/styles/documentSearchBody.css';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DocumentsContext from '../contexts/documentsContext';
import DocumentsReasonRejectionContext from '../contexts/documentsReasonRejectionContext';
import ProvidersContext from '../contexts/providersContext';
import DigitalDocumentsContext from '../contexts/digitalDocumentsContexts';
import DigitalDocumentsRejectedContext from '../contexts/digitalDocumentsRejectedContexts';
import StatesContext from '../contexts/statesContext';
import PaymentsContext from '../contexts/paymentsContext';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import pagination from '../pagination/pagination';
import { makeStyles, Tabs, Tab, Modal } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import { GrDocumentDownload } from "react-icons/gr";
import { GrFormSchedule } from "react-icons/gr";
import Button from '@material-ui/core/Button';
import IuDocumentSearchResultBody from '../components/iuDocumentSearchResultBody';
import StateTypesContext from '../contexts/stateTypesContext';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    headerTable: {
        fontWeight: 'bold',
        color: '#797a7a',
        backgroundColor: 'white',
        opacity: '1'
    },
    rowsTable: {
        fontWeight: 'bold',
        color: '#000000',
        backgroundColor: 'white',
        opacity: '0.4'
    },

    modal: {
        display: 'inlineBlock',
        position: 'absolute',
        top: '50%',
        left: '50%',
        minWidth: '400px',
        minHeigth: '100px',
        backgroundColor: '#FFFFFF',
        zIndex: '3000'
    },
    documentFilterMenu: {
        display: 'inline-block',
        maxWidth: '300px',
        minWidth: '300px'

    },
    documentFilterMenulegend: {
        display: 'block',
        maxWidth: '70%',
        marginLeft: '12%',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontSize: '10'
    },
    documentFilterMenuSelect: {
        display: 'block',
        border: 'none',
        borderBottom: '1px solid #000000',
        marginLeft: '12%',
        maxWidth: '200px',
        marginBottom: '10px'
    },
    documentFilterMenulegend1: {
        display: 'block',
        maxWidth: '70%',
        marginLeft: '12%',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontSize: '10'
    },
    documentFilterMenuSelect1: {
        display: 'block',
        border: 'none',
        borderBottom: '1px solid #000000',
        marginLeft: '12%',
        marginRight: '5%',
        maxWidth: '200px',
        marginBottom: '0px'
    },
    documentFilterMenuBtn: {
        display: 'inline-block',
        width: '90px',
        height: '30px',
        marginLeft: '12%',
        border: '1px solid #009639',
        backgroundColor: 'white',
        fontSize: '14px',
        color: '#009639',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    documentFilterMenuBtn1: {
        display: 'inline-block',
        marginLeft: '15px',
        marginTop: '2px',
        fontWeight: 'bold'
    },
    documentFilterMenuBtn2: {
        display: 'inline-block',
        width: '90px',
        height: '30px',
        marginLeft: '10px',
        border: '1px solid #009639',
        backgroundColor: '#009639',
        fontSize: '14px',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    documentFilterMenuBtn3: {
        display: 'inline-block',
        marginLeft: '24px',
        marginTop: '2px',
        fontWeight: 'bold'
    },
    documentFilterMenuWidth: {
        display: 'inline-block',
        width: '275px',
        height: '10px',

    }
});



const useTabStyles = makeStyles({


    documentTabStyle: {
        display: 'block',
        width: '125%',
        marginLeft: '0%'
    },
    btnTab0Style: {
        display: 'inline',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: '900',
        textTransform: 'none',
        fontSize: 16,
        marginLeft: '1%',
        marginTop: "1%",
        width: '35%',
        minWidth: '35%',
        maxHeight: '10px',
        color: '#87847b'
    },
    btnTab0StyleDisabled: {
        display: 'inline',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: '900',
        textTransform: 'none',
        fontSize: 16,
        marginLeft: '1%',
        marginTop: "1%",
        width: '35%',
        minWidth: '35%',
        maxHeight: '10px',
        color: '#87847b',
        align: 'left',
        backgroundColor: '#eeeeef'
    },
    btnTab1Style: {
        display: 'inline',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: '900',
        textTransform: 'capitalize',
        fontSize: 16,
        marginLeft: '0%',
        marginTop: "1%",
        width: '30%',
        minWidth: '30%',
        maxHeight: '10px',
        color: '#87847b'
    },
    btnTab1StyleDisabled: {
        display: 'inline',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: '900',
        textTransform: 'capitalize',
        fontSize: 16,
        marginLeft: '0%',
        marginTop: "1%",
        width: '30%',
        minWidth: '30%',
        maxHeight: '10px',
        color: '#87847b',
        backgroundColor: '#eeeeef'
    }

})

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

const documentTabsTheme = createMuiTheme({

    overrides: {

        MuiTab: {

            wrapper: {



            },
        },
    },

    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#009639'
        }
    }

});



export default function DocumentBody() {
    const classes = useStyles();
    const tabClasses = useTabStyles();
    const [allDocs, setAllDocs] = useState("");
    const [allFirstTabData, setAllFirstTabData] = useState("");
    const [allFirstTabDataBackup, setAllFirstTabDataBackup] = useState("");
    const [allSecondTabData, setAllSecondTabData] = useState("");
    const [allSearchData, setAllSearchData] = useState("");
    const [allPayments, setAllPayments] = useState("");
    const [allDocumentsReasonRejection, setAllDocumentsReasonRejection] = useState("");
    const [allDigDocs, setAllDigDocs] = useState("");
    const [allStates, setAllStates] = useState("");
    const [allProviders, setAllProviders] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [firstTabPageQuantity, setFirstTabPageQuantity] = useState(10);
    const [value, setValue] = useState(0);
    const [showTab, setShowTab] = useState(0);
    let filesToDownload = new Array();
    const rowsPerPage = 4;

    const [fileNameValue, setFileNameValue] = useState(null);
    const [sinceValue, setSinceValue] = useState(null);
    const [untilValue, setUntilValue] = useState(null);
    const [sincePeriodValue, setSincePeriodValue] = useState(null);
    const [untilPeriodValue, setUntilPeriodValue] = useState(null);
    const [stateValue, setStateValue] = useState('Cualquiera');
    const [providerValue, setProviderValue] = useState('Cualquiera');
    const [searchResult, setSearchResult] = useState(null);
    const [currentProvider, setCurrentProvider] = useState("");
    const [rejectFormState, setRejectFormState] = useState(false);


    function DocumentSearch() {

        return (



            <div></div>



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



    useEffect(() => {
        setCurrentProvider(JSON.parse(window.localStorage.getItem("currentProvider") || "").razon_social);
        if (allDocs == "") {
            DocumentsContext.fetchDocuments().then((e) => { setAllDocs(e); });
        }
        if (allProviders == "") {
            ProvidersContext.fetchProviders().then((e) => { setAllProviders(e); });
        }
        if (allDigDocs == "") {
            DigitalDocumentsContext.fetchDocuments().then((e) => { setAllDigDocs(e); });
        }
        if (allStates == "") {
            StatesContext.fetchStates().then((e) => { setAllStates(e); });
        }
        if (allPayments == "") {
            PaymentsContext.fetchPayments().then((e) => { setAllPayments(e); });
        }
        if (allDocumentsReasonRejection == "") {
            DocumentsReasonRejectionContext.fetchDocumentsReasonRejection().then((e) => { setAllDocumentsReasonRejection(e); });
        }
        else {
            dataMapper(allDocs);
        }

    }, [allDocs, allDigDocs, allProviders, allStates, allPayments, allDocumentsReasonRejection]);

    const columns = [
        {
            id: 'Fecha_doc',
            label: 'Fecha de rechazo',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Estado',
            label: 'Motivo',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Tipo',
            label: 'Rechazado por',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Numero',
            label: 'CUIT',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'NP',
            label: 'Razon social',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Monto',
            label: 'Nombre Archivo',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Estado',
            label: 'Estado',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Detalle_pago',
            label: 'Descargar',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        }

    ];

    

    const dataMapper = (alldocs) => {
        let allfirsttabdata = [];
        let allfirsttabdatabackup = [];


        if (allDigDocs != "" && allDigDocs != undefined && allDigDocs != null) {
            allfirsttabdata = allDigDocs.filter(digdoc => digdoc.id_documento_electronico > 0);
            allfirsttabdatabackup = allDigDocs.filter(digdoc => digdoc.id_documento_electronico > 0);
        }
        
        let pagFirstTabData = pagination(allfirsttabdata, allfirsttabdata.length, rowsPerPage);
        /*let pagSecondTabData = pagination(allsecondtabdata, allsecondtabdata.length, rowsPerPage);*/
        let pagFirstTabDataBackup = pagination(allfirsttabdatabackup, allfirsttabdatabackup.length, rowsPerPage);
        setFirstTabPageQuantity(pagFirstTabData.length);
        /*setSecondTabPageQuantity(pagSecondTabData.length);*/
        setAllFirstTabData(pagFirstTabData);
        setAllFirstTabDataBackup(pagFirstTabDataBackup);
        /*setAllSecondTabData(pagSecondTabData);*/
        setAllSearchData(pagFirstTabData);
    }


    const paginationTheme = createMuiTheme({


        MuiTouchRipple: {
            root: {

                display: 'none'

            }
        },

        overrides: {

            MuiPaginationItem: {

                page: {

                    '&:hover': {
                        color: '#000000',
                        fontWeight: 'bold'
                    },
                    '&.Mui-selected': {
                        color: '#000000',
                        fontWeight: 'bold',
                        border: 'none',
                        background: 'none',
                        backgroundColor: 'transparent'
                    },

                },
            },
        },
    });


    const paginationHandler = (e) => {
        if (e.target.ariaLabel != undefined) {
            let label = e.target.ariaLabel;
            let nPage = label.split(" ");
            let pageNum = parseInt(nPage[nPage.length - 1]);
            setPageNumber(pageNum);
        }

    }



    const handleTabs = (e, val) => {
        setValue(val);

    }

    const firstTab = () => {
        setShowTab(0);
    }

    const secondTab = () => {
        setShowTab(1);
    }

    
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

    function DocumentSearch() {
        return (
            <IuDocumentSearchResultBody props={searchResult} />
        );
    }

    function checkAllDigDocInputs() {

    }

    function searchDigitalDocument() {
        setSearchResult("");
        let inputFileName = fileNameValue;
        let inputSince = new Date(sinceValue).getTime();
        let inputUntil = new Date(untilValue).getTime();
        let inputSincePeriod = new Date(sincePeriodValue).getTime();
        let inputUntilPeriod = new Date(untilPeriodValue).getTime();
        let inputProvider = providerValue;
        let inputState = stateValue;
        let results = [];
        let finalResults = [];
        let indexToRemove = [];

        for (let i = 0; i < allDigDocs.length; i++) {

            let currentState = allDigDocs[i].id_estado;
            let currentProvider = allDigDocs[i].cuit;
            let currentLoadTime = new Date(allDigDocs[i].fecha_carga).getTime();
            let currentStateTime = new Date(allDigDocs[i].fecha_estado).getTime();
            let matchState;
            let matchProvider;

            for (let j = 0; j < allStates.length; j++) {
                if (currentState == allStates[j].id_estado) {
                    matchState = allStates[j].descripcion_abreviada;
                }
            }

            for (let j = 0; j < allProviders.length; j++) {
                if (currentProvider == allProviders[j].cuit) {
                    matchProvider = allProviders[j];
                }
            }

            let obj = {

                fecha_ingreso: allDigDocs[i].fecha_carga,
                fecha_estado: allDigDocs[i].fecha_estado,
                cuit: allDigDocs[i].cuit,
                razon_social: matchProvider.razon_social,
                nombre_archivo: allDigDocs[i].nombre_archivo,
                estado: matchState,
                descargar: allDigDocs[i].descargar,
                id_documento_electronico: allDigDocs[i].id_documento_electronico,
                usuario_rechazo: window.localStorage.getItem("iUserName"),
                codigo_motivo_rechazo: null,
                fecha_rechazo: new Date().toLocaleDateString()
            }

            if (obj.nombre_archivo.includes(inputFileName) && inputFileName != "") {
                results.push(obj);
            }

            if (obj.estado == inputState || inputState == "Cualquiera") {
                results.push(obj);
            }

            if (obj.razon_social.toLowerCase() == inputProvider.toLowerCase() || inputProvider == "Cualquiera") {
                results.push(obj);
            }

            if (currentLoadTime >= inputSince && currentLoadTime <= inputUntil) {
                results.push(obj);
            }

            if (currentStateTime >= inputSincePeriod && currentStateTime <= inputUntilPeriod) {
                results.push(obj);
            }


            results.forEach(function (element, index) {
                if (!element.nombre_archivo.includes(inputFileName) && inputFileName != "" && inputFileName != null) {
                    indexToRemove.push(index);
                }

                if (element.estado != inputState && inputState != "Cualquiera") {
                    indexToRemove.push(index);
                }

                if (element.razon_social.toLowerCase() != inputProvider.toLowerCase() && inputProvider != "Cualquiera") {
                    indexToRemove.push(index);
                }

                if (inputSince != null && inputSince != "" && currentLoadTime < inputSince || inputUntil != null && inputUntil != "" && currentLoadTime > inputUntil) {
                    indexToRemove.push(index);
                }

                if (inputSincePeriod != null && inputSincePeriod != "" && currentStateTime < inputSincePeriod || inputUntilPeriod != null && inputUntilPeriod != "" && currentStateTime > inputUntilPeriod) {
                    indexToRemove.push(index);
                }


            });

        }


        indexToRemove.forEach((element) => {
            delete results[element];
        }
        );

        results.forEach((element) => {

            if (!finalResults.includes(element)) {
            finalResults.push(element);
            }
        });
       
        
        setSearchResult(finalResults);
        let element = document.getElementById("documentRejectContainer");
        if (finalResults[0] != null && finalResults[0] != "" && finalResults[0] != undefined) {
            element.removeAttribute("hidden");
        }
        else {
            element.setAttribute("hidden", true);
        }
    }

    function rejectDocuments() {

        let reaject = document.getElementById("reasonReject");
        let rejdet = document.getElementById("rejectDetails");
        let reasonCode;
        let rejectDetail = rejdet.value;
        allDocumentsReasonRejection.filter((reason) => {
            if (reason.descripcion_rechazo.includes(reaject.value)) {
                reasonCode = reason.codigo_motivo_rechazo;
            }
        });

        searchResult.forEach(element => element.codigo_motivo_rechazo = reasonCode);
        searchResult.forEach(element => element.observaciones = rejectDetail);
        DigitalDocumentsRejectedContext.rejectDocuments(searchResult);

    }

    function RejectDocumentForm() {

        return (
            <div className="rejectDocumentFormContainer">
                <input type="checkbox" /><span className="rejectDocsStyle" onChange={ checkAllDigDocInputs }>Rechazar todos los documentos listados</span>
                <div>
                <span className="rejectDocForm3">Motivo de rechazo</span><br />
                    <select id="reasonReject" className="rejectDocForm" placeholder="Codigo archivo de rechazo">
                        {allDocumentsReasonRejection.map((option) => (
                            <option>{option.descripcion_rechazo}</option>
                        ))}
                </select><br/>
                </div>
                <div>
                <span className="rejectDocForm1">Observaciones</span><br />
                    <textarea id="rejectDetails" className="rejectDocForm2" type="text" /><br /><br />
                </div>
                <button className="documentUploadBtn6" onClick={rejectDocuments}>
                    Rechazar
                </button>
            </div>

        );

    }




    if (allFirstTabData == undefined || allFirstTabData == null || allFirstTabData == "" || allFirstTabData == 0) {

        return (
            
            <div className="documentContentContainer">


                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "30%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0StyleDisabled} label='Administrar documentos electronicos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1Style} label='Documentos Rechazados.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>




                <Paper className={classes.root}>





                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell className={classes.headerTable}
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody id="documentTable">
                                <TableRow>
                                    <h5 className="documentSearchBodyVoidResultMsg">No existen documentos para este proveedor</h5>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                <ThemeProvider theme={paginationTheme}>
                    <div className="paginationContainerStyle">
                        <Pagination count={firstTabPageQuantity} onChange={paginationHandler} />
                    </div>
                </ThemeProvider>

                </Paper>
            </div >
        );

            
            

    }

    if (showTab == 0 && allFirstTabData != "") {


        return (
            <div className="iuDocumentSearchBody">

                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "33.5%", height: "4%", marginLeft: "1.5%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0Style} label='Administrar documentos electronicos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Documentos Rechazados.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>






            

           


            <div className="documentSearchFormContainer3">

                    <span className="documentSearchFormLegend3">Proveedor</span>

                    <select className="documentSearchFormSelect" onChange={(e) => setProviderValue(e.target.value)}>
                        <option selected value="Cualquiera">{ currentProvider }</option>
                    </select>

                </div>

                <div className="documentSearchFormContainer3">

                    <span className="documentSearchFormLegend3">Estado</span>

                    <select className="documentSearchFormSelect" onChange={(e) => setStateValue(e.target.value)}>
                        <option selected value="Cualquiera">Cualquiera</option>
                        {allStates.map((state) => (
                            <option>{ state.descripcion_abreviada }</option>
                        ))}
                        
                    </select>

                </div>

                <div className="documentSearchFormContainer1">

                    <span className="documentSearchFormLegend1">Periodo de incorporacion</span>
                    <input id="documentSearchFormInput1" className="documentSearchFormInput1" placeholder="AAAA/MM/DD" onChange={(e) =>setSincePeriodValue(e.target.value)}></input>
                    <GrFormSchedule className="documentSearchFormScheduleIcon" />

                </div>

                <div className="documentSearchFormContainer2">

                    <input id="documentSearchFormInput2" className="documentSearchFormInput2" placeholder="AAAA/MM/DD" onChange={(e) =>setUntilPeriodValue(e.target.value)}></input>
                    <GrFormSchedule className="documentSearchFormScheduleIcon1" />

                </div>


                <div className="documentSearchFormContainer1">

                    <span className="documentSearchFormLegend1">Periodo de estado</span>
                    <input id="documentSearchFormInput1" className="documentSearchFormInput1" placeholder="AAAA/MM/DD" onChange={(e) =>setSinceValue(e.target.value)}></input>
                    <GrFormSchedule className="documentSearchFormScheduleIcon" />

                </div>

                <div className="documentSearchFormContainer2">

                    <input id="documentSearchFormInput2" className="documentSearchFormInput2" placeholder="AAAA/MM/DD" onChange={(e) =>setUntilValue(e.target.value)}></input>
                    <GrFormSchedule className="documentSearchFormScheduleIcon1" />

                </div>




                <div className="documentSearchFormContainer">

                    <span className="documentSearchFormLegend">Nombre de archivo</span>
                    <input id="documentSearchFormInput" className="documentSearchFormInput" onChange={(e) => setFileNameValue(e.target.value)}></input>


                </div>

          

                <div className="documentSearchFormBtnContainer">
                <ThemeProvider theme={theme}>
                        <Button color="primary" variant="contained" disableElevation onClick={ searchDigitalDocument }>
                        Buscar
                 </Button>
                </ThemeProvider>
                </div>


                <div className="documentSearchResContainer">

                    <DocumentSearch />
                    <div id="documentRejectContainer" hidden>
                    <RejectDocumentForm />
                    </div>

                </div>


            
            </div >



        )
    }



    if (showTab == 1) {
        return (
            <div className="documentContentContainer">

                  
                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "30%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0StyleDisabled} label='Administrar documentos electronicos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1Style} label='Documentos Rechazados.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>




                <Paper className={classes.root}>



                 

                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell className={classes.headerTable}
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody id="documentTable">
                                {

                                    allFirstTabData[pageNumber - 1].map((row, index) => {
                                        if (row != undefined) {
                                            return (

                                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                    {columns.map((column) => {


                                                        for (let i = 0; i < allFirstTabData.length; i++) {
                                                            if (column.id == "Fecha_doc") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.fecha_documento}
                                                                    </TableCell>
                                                                );
                                                            }
                                                            else if (column.id == "Estado") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.estado}
                                                                    </TableCell>
                                                                );
                                                            }
                                                            else if (column.id == "Tipo") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.tipo}
                                                                    </TableCell>
                                                                );
                                                            }
                                                            else if (column.id == "Numero") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.numero_documento}
                                                                    </TableCell>
                                                                );
                                                            }

                                                            else if (column.id == "NP") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.nota_pedido}
                                                                    </TableCell>
                                                                );
                                                            }
                                                            else if (column.id == "Monto") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {"$" + row.monto}
                                                                    </TableCell>
                                                                );
                                                            }
                                                            else if (column.id == "Estado") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.nota_pedido}
                                                                    </TableCell>
                                                                );
                                                            }
                                                            else if (column.id == "Detalle_pago") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        <GrDocumentDownload className="documentSearchResultIcon" onChange={prepareBase64File(index.type, index.image, index.filename, i)} onClick={(e) => downloadBase64File(i)} />

                                                                    </TableCell>
                                                                );
                                                            }

                                                        }

                                                    })

                                                    }
                                                </TableRow>
                                            );
                                        }
                                    })

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <ThemeProvider theme={paginationTheme}>
                        <div className="paginationContainerStyle">
                            <Pagination count={firstTabPageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );
    }
}


