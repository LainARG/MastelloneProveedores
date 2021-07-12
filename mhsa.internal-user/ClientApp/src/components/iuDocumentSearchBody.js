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
import ProvidersContext from '../contexts/providersContext';
import DigitalDocumentsContext from '../contexts/digitalDocumentsContexts';
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
    const [allDigDocs, setAllDigDocs] = useState("");
    const [allStates, setAllStates] = useState("");
    const [allProviders, setAllProviders] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [firstTabPageQuantity, setFirstTabPageQuantity] = useState(10);
    const [secondTabPageQuantity, setSecondTabPageQuantity] = useState(10);
    const [value, setValue] = useState(0);
    const [showTab, setShowTab] = useState(0);
    const [openFilterMenu, setOpenFilterMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const [modal, setModal] = useState(false);
    const [paymentDetailsProps, setPaymentDetailsProps] = useState(false);
    let filesToDownload = new Array();
    const rowsPerPage = 4;

    const [fileNameValue, setFileNameValue] = useState(null);
    const [sinceValue, setSinceValue] = useState(null);
    const [untilValue, setUntilValue] = useState(null);
    const [sincePeriodValue, setSincePeriodValue] = useState(null);
    const [untilPeriodValue, setUntilPeriodValue] = useState(null);
    const [stateValue, setStateValue] = useState('Cualquiera');
    const [providerValue, setProviderValue] = useState('Cualquiera');
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

        if (allDocs == "") {
            DocumentsContext.fetchDocuments().then((e) => { setAllDocs(e); });
            ProvidersContext.fetchProviders().then((e) => { setAllProviders(e); });
            DigitalDocumentsContext.fetchDocuments().then((e) => { setAllDigDocs(e); });
            StatesContext.fetchStates().then((e) => { setAllStates(e); });
            PaymentsContext.fetchPayments().then((e) => { setAllPayments(e); });
        } else {
            dataMapper(allDocs);
        }

    }, [allDocs, allDigDocs, modal]);

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
        let allsecondtabdata = [];
        let allpayments = [];
        let paymentStateStringValue = "";
        let stateStringValue = "";

        for (let j = 0; j < allDocs.length; j++) {
            let objectData = {
                fecha_documento: null,
                estado: null,
                tipo: null,
                type: null,
                filename: null,
                numero_documento: null,
                numero_pago: null,
                monto_bruto: null,
                monto_pago: null,
                estado_pago: null,
                observaciones_pago: null,
                digDoc_fecha_carga: null,
                digDoc_estado: null,
                digDoc_usu_carga: null,
                digDoc_descarga: null
            }

            let objectData2 = {
                fecha_documento: null,
                estado: null,
                tipo: null,
                numero_documento: null,
                numero_pago: null,
                monto_bruto: null,
                monto_pago: null,
                estado_pago: null,
                observaciones_pago: null
            }

            for (let i = 0; i < allPayments.length; i++) {
                for (let j = 0; j < alldocs.length; j++) {

                    if (allPayments[i].numero_pago == alldocs[j].numero_pago) {
                        allpayments.push(allPayments[i]);
                    }

                }
            }

            for (let i = 0; i < allpayments.length; i++) {

                if (i < allStates.length && allStates[i].id_estado == allpayments[j].id_estado) {
                    paymentStateStringValue = allStates[i].descripcion_abreviada;
                }

            }

            for (let i = 0; i < alldocs.length; i++) {

                if (i < allStates.length && allStates[i].id_estado == alldocs[j].id_estado && allStates[i] != undefined) {
                    stateStringValue = allStates[i].descripcion_abreviada;
                }

            }




            objectData.fecha_documento = alldocs[j].fecha_documento;
            objectData.estado = stateStringValue;
            objectData.tipo = alldocs[j].id_tipo_documento;
            objectData.numero_documento = alldocs[j].letra_documento + "-" + alldocs[j].prefijo_documento + "-" + alldocs[j].numero_documento;
            objectData.nota_pedido = alldocs[j].nota_pedido;
            objectData.monto = alldocs[j].monto;
            objectData.numero_pago = alldocs[j].numero_pago;
            if (allpayments[j] != undefined) {
                objectData.estado_pago = paymentStateStringValue;
                objectData.monto_pago = allpayments[j].total_pago;
            }

            objectData2.fecha_documento = alldocs[j].fecha_documento;
            objectData2.estado = stateStringValue;
            objectData2.tipo = alldocs[j].id_tipo_documento;
            objectData2.numero_documento = alldocs[j].letra_documento + "-" + alldocs[j].prefijo_documento + "-" + alldocs[j].numero_documento;
            objectData2.nota_pedido = alldocs[j].nota_pedido;
            objectData2.monto = alldocs[j].monto;
            objectData2.numero_pago = alldocs[j].numero_pago;
            if (allpayments[j] != undefined) {
                objectData2.estado_pago = paymentStateStringValue;
                objectData2.monto_pago = allpayments[j].total_pago;
            }


            allfirsttabdata.push(objectData);
            allfirsttabdatabackup.push(objectData2);

        }

        for (let j = 0; j < allDigDocs.length; j++) {
            let objectData = {
                digDoc_fecha_carga: null,
                digDoc_estado: null,
                digDoc_usu_carga: null,
                imagen: null
            }

            for (let i = 0; i < allStates.length; i++) {

                if (allStates[i].id_estado == allDigDocs[j].id_estado) {
                    stateStringValue = allStates[i].descripcion_abreviada;
                }
            }

            objectData.digDoc_fecha_carga = allDigDocs[j].fecha_carga;
            objectData.digDoc_estado = stateStringValue;
            objectData.digDoc_usu_carga = allDigDocs[j].id_usuario_carga;
            objectData.imagen = allDigDocs[j].imagen;
            objectData.type = allDigDocs[j].tipo_archivo;
            objectData.filename = allDigDocs[j].nombre_archivo;
            allsecondtabdata.push(objectData);

        }

        let pagFirstTabData = pagination(allfirsttabdata, allfirsttabdata.length, rowsPerPage);
        let pagSecondTabData = pagination(allsecondtabdata, allsecondtabdata.length, rowsPerPage);
        let pagFirstTabDataBackup = pagination(allfirsttabdatabackup, allfirsttabdatabackup.length, rowsPerPage);
        setFirstTabPageQuantity(pagFirstTabData.length);
        setSecondTabPageQuantity(pagSecondTabData.length);
        setAllFirstTabData(pagFirstTabData);
        setAllFirstTabDataBackup(pagFirstTabDataBackup);
        setAllSecondTabData(pagSecondTabData);
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

        for (let i = 0; i < dataContext.length; i++) {

            let currentState = dataContext[i].id_estado;
            let currentProvider = dataContext[i].cuit;
            let currentLoadTime = new Date(dataContext[i].fecha_carga).getTime();
            let currentStateTime = new Date(dataContext[i].fecha_estado).getTime();
            let matchState;
            let matchProvider;

            for (let j = 0; j < allStates.length; j++) {
                if(currentState == allStates[j].id_estado) {
                    matchState = allStates[j].descripcion_abreviada;
                }
            }

            for (let j = 0; j < allProviders.length; j++) {
                if (currentProvider == allProviders[j].cuit) {
                    matchProvider = allProviders[j];
                }
            }

            let obj = {

                fecha_ingreso: dataContext[i].fecha_carga,
                fecha_estado: dataContext[i].fecha_estado,
                cuit:dataContext[i].cuit,
                razon_social: matchProvider.razon_social,
                nombre_archivo: dataContext[i].nombre_archivo,
                estado: matchState,
                descargar: dataContext[i].descargar,

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
                    console.log("success")
                    console.log(inputFileName);
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
            console.log(element);
            delete results[element];
        }
        );

        results.forEach((element) => {

            if (!finalResults.includes(element)) {
            finalResults.push(element);
            }
        });
       
        
        setSearchResult(finalResults);

    }







    if (allFirstTabData == undefined || allFirstTabData == null || allFirstTabData == "" || allFirstTabData == 0) {

        return(<h1>Loading...</h1>)

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
                        <option selected value="Cualquiera">Cualquiera</option>
                        <option value="Advantive S.A.">Advantive S.A.</option>
                        <option value="El Libertario S.A.">El Libertario S.A.</option>
                    </select>

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

                    <DocumentSearch/>


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


