import React, { useEffect, useState } from 'react';
import '../resources/styles/paymentsReportBody.css';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PaymentsContext from '../contexts/paymentsContext';
import StatesContext from '../contexts/statesContext';
import PaymentsFormsContext from '../contexts/paymentsFormsContext';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import pagination from '../pagination/pagination';
import TuneIcon from '@material-ui/icons/Tune';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles, Tabs, Tab, Modal } from '@material-ui/core';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import { Menu, MenuItem } from '@material-ui/core';
import { GrDocumentDownload } from "react-icons/gr";



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
        width: '20%',
        minWidth: '20%',
        maxHeight:'10px',
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
        width: '20%',
        minWidth: '20%',
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
        width: '20%',
        minWidth: '20%',
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
        width: '20%',
        minWidth: '20%',
        maxHeight: '10px',
        color: '#87847b',
        backgroundColor:'#eeeeef'
    }

})

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



export default function PaymentsReportBody() {
    const classes = useStyles();
    const tabClasses = useTabStyles();
    const [allPays, setAllPays] = useState("");
    const [allPaymentsForms, setAllPaymentsForms] = useState("");
    const [allDataPrimaryTab, setAllDataPrimaryTab] = useState("");
    const [allDataSecondaryTab, setAllDataSecondaryTab] = useState("");
    const [paymentsBackup, setPaymentsBackup] = useState("");
    const [allStates, setAllStates] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [primaryPageQuantity, setPrimaryPageQuantity] = useState(10);
    const [secondaryPageQuantity, setSecondaryPageQuantity] = useState(10);
    const [value, setValue] = useState(0);
    const [showTab, setShowTab] = useState(1);
    const [openFilterMenu, setOpenFilterMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const [modal, setModal] = useState(false);
    const [paymentDetailsProps, setPaymentDetailsProps] = useState(false);
    let filesToDownload = new Array();
    const rowsPerPage = 4;
    
    const openModal = (props) => {
        setPaymentDetailsProps(props);
        setTimeout(function () { setModal(true); }, 100);

    }

    const closeModal = () => {
        setModal(false);
    }



    useEffect(() => {

        if (allPays != "" && allPaymentsForms != "") {
            dataMapper();
        }
        else {
            if (allPays == "") {
                PaymentsContext.fetchPayments().then((e) => { setAllPays(e) });
            }
            if (allStates == "") {
                StatesContext.fetchStates().then((e) => { setAllStates(e); });
            }
            if (allPaymentsForms == "") {
                PaymentsFormsContext.fetchAllPaymentsForms().then((e) => { setAllPaymentsForms(e); });
            }
        }

}, [allPays, allPaymentsForms, allStates]);
    


    const columns = [
        {
            id: 'numero_pago',
            label: 'Numero de pago',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'retirar_en',
            label: 'Retirar en',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'a_partir_de',
            label: 'A partir de',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'estado_pago',
            label: 'Estado',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'total_pago',
            label: 'Total pago',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'detalle_pago',
            label: 'Detalle del pago',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        }
    ];

    const retention_columns= [
        {
            id: 'numero_pago',
            label: 'Numero de pago',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'fecha_emision',
            label: 'Fecha de emision',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'fecha_pago',
            label: 'Fecha de pago',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'tipo',
            label: 'Tipo',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'numero',
            label: 'Numero',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'importe',
            label: 'Importe',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'comprobante',
            label: 'Comprobante',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        }

    ];

  

    const dataMapper = () => {

        let alldataPTab = [];
        let alldataSTab = [];
        let alldatabackup = [];
        let currentPaymentState;
        console.log(allPaymentsForms);
       
        if (allPays != null && allPays != undefined) {
            for (let i = 0; i < allPays.length; i++) {
                if (allStates != "" && allStates != undefined && allStates != null) {
                    currentPaymentState = (allStates.filter(state => state.id_estado == allPays[i].id_estado))[0].descripcion_abreviada;
                }
                let obj = {
                    numero_pago: allPays[i].prefijo_pago + "-" + allPays[i].numero_pago,
                    retirar_en: allPays[i].lugar_retiro,
                    a_partir_de: allPays[i].fecha_disponible,
                    estado_pago: currentPaymentState,
                    total_pago: allPays[i].total_pago,
                    id_pago: allPays[i].id_pago
                }
                let obj1 = {
                    numero_pago: allPays[i].prefijo_pago + "-" + allPays[i].numero_pago,
                    retirar_en: allPays[i].lugar_retiro,
                    a_partir_de: allPays[i].fecha_disponible,
                    estado_pago: currentPaymentState,
                    total_pago: allPays[i].total_pago,
                    id_pago: allPays[i].id_pago
                }

                alldataPTab.push(obj);
                alldatabackup.push(obj1);
            }
        }
        if (allPaymentsForms != "" && allPaymentsForms != undefined && allPaymentsForms != null) {
            for (let i = 0; i < allPaymentsForms.length; i++) {
                let currentPayment;
                let currentObject = allPaymentsForms[i];

                if (allPays != "") {
                    currentPayment = (allPays.filter(payment => payment.id_pago.toString() == currentObject.id_pago.toString()))[0];
                }

                if (currentPayment != undefined && currentPayment != "" && currentPayment != null) {
                    let obj = {
                        numero_pago: currentPayment.prefijo_pago + "-" + currentPayment.numero_pago,
                        fecha_emision: currentObject.fecha_emision,
                        fecha_pago: currentObject.fecha_pago,
                        tipo: currentObject.descripcion,
                        numero: currentObject.numero,
                        importe: currentObject.importe,
                        comprobante: currentObject.imagen
                    }
                    alldataSTab.push(obj);
                }

            }
        }

        
        let pagData = pagination(alldataPTab, alldataPTab.length, rowsPerPage);
        let pagDataBackup = pagination(alldatabackup, alldatabackup.length, rowsPerPage);
        let pagData1 = pagination(alldataSTab, alldataSTab.length, rowsPerPage);
        setPrimaryPageQuantity(pagData.length);
        setSecondaryPageQuantity(pagData1.length);
        setAllDataPrimaryTab(pagData);
        setAllDataSecondaryTab(pagData1);
        setPaymentsBackup(pagDataBackup);
    }


    const paginationTheme = createMuiTheme({


            MuiTouchRipple: {
              root: {
                
                display:'none'

              }
            },
        
        overrides: {

            MuiPaginationItem: {
                
                page: {
                    
                    '&:hover': {
                        color: '#000000',
                        fontWeight:'bold'
                    },
                    '&.Mui-selected': {
                        color: '#000000',
                        fontWeight: 'bold',
                        border: 'none',
                        background: 'none',
                        backgroundColor:'transparent'
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
        setShowTab(1);
    }

    const secondTab = () => {
        setShowTab(2);
    }
       
    const FilterMenuHandler = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenFilterMenu(!openFilterMenu);
    }

    function CancelDocumentFiltering() {
        setAllDataPrimaryTab(paymentsBackup);
        setPrimaryPageQuantity(paymentsBackup.length);
        setOpenFilterMenu(false);
    }

    function prepareBase64File(contentType, base64Data, fileName, index) {
        const linkSource = `data:${contentType};base64,${base64Data}`;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        filesToDownload[index] = downloadLink;
    }




    function DocumentFilterMenu() {

        return (

            <div className="documentFilterMenuContainer">

                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={openFilterMenu}
                    className={classes.documentFilterMenu}

                >


                    <span className={classes.documentFilterMenulegend1}>Estado</span>

                    <select
                        id="menuFilterStateSelect"
                        className={classes.documentFilterMenuSelect1}
                    >
                        <option>Cualquiera</option>
                        <option>A retirar</option>
                        <option>Con recibo</option>

                    </select>


                    <ThemeProvider theme={theme}>
                        <p className={classes.documentFilterMenuWidth}></p>
                        <span className={classes.documentFilterMenuBtn} onClick={CancelDocumentFiltering}>
                            <span className={classes.documentFilterMenuBtn1}>Cancelar</span>
                        </span>
                        <span className={classes.documentFilterMenuBtn2} onClick={FilterDocumentAction}>
                            <span className={classes.documentFilterMenuBtn3}>Filtrar</span>
                        </span>
                    </ThemeProvider>

                </Menu>


            </div>


        );
    }

    function FilterDocumentAction(e) {
        e.preventDefault();
        setOpenFilterMenu(false);
        let arrayPagedSuggestions = [];
        let pagedSuggestions = [];
        let menuFilterStateValue = document.getElementById("menuFilterStateSelect").value;

        if (menuFilterStateValue == "Cualquiera") {
            CancelDocumentFiltering();
        } else if (paymentsBackup.length == allDataPrimaryTab.length) {

            let suggestions = JSON.parse(JSON.stringify(allDataPrimaryTab));

            for (let i = 0; i < allDataPrimaryTab.length; i++) {
                for (let j = 0; j < allDataPrimaryTab[i].length; j++) {

                    if (allDataPrimaryTab[i][j] != undefined) {

                        if (allDataPrimaryTab[i][j].estado_pago.toLowerCase() != menuFilterStateValue.toLowerCase()) {
                            delete suggestions[i][j]

                        } else {
                            arrayPagedSuggestions.push(allDataPrimaryTab[i][j]);
                            pagedSuggestions = pagination(arrayPagedSuggestions, arrayPagedSuggestions.length, rowsPerPage);
                        }
                        setPrimaryPageQuantity(pagedSuggestions.length);
                        setAllDataPrimaryTab(pagedSuggestions);
                    }
                }
            }
        } else {
            CancelDocumentFiltering();
        }

    }

    function redirector(path) {
        window.location = path;
    }

    
    function searchPrimaryPageSuggestionsHandler(e) {
        e.preventDefault();
        CancelDocumentFiltering();
        let suggestions = [];


        if (e.target.value == "") {
            setAllDataPrimaryTab(paymentsBackup);
        } else {


            for (let i = 0; i < allDataPrimaryTab.length; i++) {
                for (let j = 0; j < allDataPrimaryTab[i].length; j++) {

                    suggestions.push(allDataPrimaryTab[i][j]);

                }
            }


            suggestions = suggestions.filter(f => f != "");
            suggestions = suggestions.filter(f => f != undefined);
            suggestions = suggestions.filter(f => f.numero_pago.includes(e.target.value));
            let pagedSuggestions = pagination(suggestions, suggestions.length, rowsPerPage);
            setPrimaryPageQuantity(pagedSuggestions.length);
            setAllDataPrimaryTab(pagedSuggestions);



        }
    }

    const BodyModal = (
        <div className="modalStyle">

            <h2 className="modalTitleStyle">Detalle del pago.</h2>
            <span className="modalNormalFontStyle">Acerca del pago num. {paymentDetailsProps.numero_pago}</span>

            <span className="modalBoldFontStyle">Num. de pago</span>
            <span className="modalBoldFontStyle">Monto pagado</span>
            <span className="modalBoldFontStyle">Estado</span><br />
            <span className="modalNormalFontStyle1">{paymentDetailsProps.numero_pago}</span>
            <span className="modalNormalFontStyle2">{paymentDetailsProps.total_pago}</span>
            <span className="modalNormalFontStyle3">{paymentDetailsProps.estado_pago}</span>

            <button className="modalBtnStyle" onClick={() => closeModal()}>Cerrar</button>


        </div>
    );

    
    function showPaymentDetail(props) {

        localStorage.removeItem("currentDetailPayment");
        localStorage.setItem("currentDetailPayment",JSON.stringify(props));
        window.location = '/payments/forms';

    }

    if (allDataPrimaryTab == undefined && showTab == 1 || allDataPrimaryTab == null && showTab == 1 || allDataPrimaryTab == "" && showTab == 1 || allDataPrimaryTab.length == 0 && showTab == 1) {

        
        return (
            <div className="documentContentContainer">

                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0Style} label='Mis Pagos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Mis retenciones impositivas.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>


                <Paper className={classes.root}>

                    <div className="documentReportIconContainer">
                        <AssignmentReturnedIcon fontSize="large"/><span className="documentReportIconLegend">Reporte - Detallado</span>
                    </div>

                    <div className="documentReportIconContainer">
                        <AssignmentReturnedIcon fontSize="large"/><span className="documentReportIconLegend">Reporte - Sin detalle</span>
                    </div>

                    <div className="documentIconContainer3" >
                        <TuneIcon fontSize="large" onClick={FilterMenuHandler} />
                        <DocumentFilterMenu />
                    </div>


                    <div className="documentSearchBarContainer">
                        <input placeholder="Buscar por num. de OP" className="documentSearchBar" onChange={(e) => searchPrimaryPageSuggestionsHandler(e)} />
                    </div>

                    <div className="documentIconContainer2">
                        <SearchRoundedIcon fontSize="large" />
                    </div>

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
                            <TableBody>
                                <TableRow hover role="checkbox" className="valueNotFoundContainer">
                                    <h5>No existen pagos relacionados a este proveedor</h5>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <ThemeProvider theme={paginationTheme}>
                        <div className="paginationContainerStyle">
                            <Pagination count={primaryPageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );
    
    }
    if (showTab == 1 && allDataPrimaryTab != undefined && allDataPrimaryTab != "" && allDataPrimaryTab != null) {
       
        return (
            <div className="documentContentContainer">

                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0Style} label='Mis Pagos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Mis retenciones impositivas.' onClick={secondTab}/>

                        </Tabs>
                    </ThemeProvider>


                </div>

                




                <Paper className={classes.root}>

                    <div className="documentReportIconContainer" onClick={()=>redirector("payments/report/detail")}>
                        <AssignmentReturnedIcon fontSize="large" /><span className="documentReportIconLegend">Reporte - Detallado</span>
                    </div>

                    <div className="documentReportIconContainer" onClick={() => redirector("payments/report/nodetail")}>
                        <AssignmentReturnedIcon fontSize="large" /><span className="documentReportIconLegend">Reporte - Sin detalle</span>
                    </div>

                    <div className="documentIconContainer3" >
                        <TuneIcon fontSize="large" onClick={FilterMenuHandler} />
                        <DocumentFilterMenu />
                    </div>


                    <div className="documentSearchBarContainer">
                        <input placeholder="Buscar por num. de OP" className="documentSearchBar" onChange={(e)=>searchPrimaryPageSuggestionsHandler(e)}/>
                    </div>

                    <div className="documentIconContainer2">
                        <SearchRoundedIcon fontSize="large" />
                    </div>

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
                            <TableBody>
                                {

                                    allDataPrimaryTab[pageNumber - 1].map((row) => {

                                        return (

                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {


                                                    for (let i = 0; i < allDataPrimaryTab.length; i++) {
                                                        if (column.id == "numero_pago") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.numero_pago}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "retirar_en") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.retirar_en}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "a_partir_de") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.a_partir_de}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "estado_pago") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.estado_pago}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "total_pago") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {"$" + row.total_pago}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "detalle_pago") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    <b><AspectRatioIcon fontSize="large" className="documentDownloadRowIcon" onClick={() => showPaymentDetail(row)} /></b>
                                                                </TableCell>
                                                            );
                                                        }

                                                    }

                                                })

                                                }
                                            </TableRow>
                                        );
                                    })

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <ThemeProvider theme={paginationTheme}>
                        <div className="paginationContainerStyle">
                            <Pagination count={primaryPageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );

    }
    if (showTab == 2 && allDataSecondaryTab != undefined && allDataSecondaryTab != "" && allDataSecondaryTab != null && allDataSecondaryTab.length > 0) {
       
        return (
            <div className="documentContentContainer">


                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0StyleDisabled} label='Mis Pagos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1Style} label='Mis Retenciones Impositivas.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>

                <div className="paymentTaxesIconContainer">
                    <span className="paymentTaxesLegend">Segun detalle de "Formas de pago".</span>
                </div>





                <Paper className={classes.root}>


                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {retention_columns.map((column) => (
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
                            <TableBody>
                                {

                                    allDataSecondaryTab[pageNumber - 1].map((row, index) => {

                                        return (

                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {retention_columns.map((column) => {


                                                    for (let i = 0; i < allDataSecondaryTab.length; i++) {
                                                        if (column.id == "numero_pago") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.numero_pago}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "fecha_emision") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.fecha_emision}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "fecha_pago") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.fecha_pago}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "tipo") {
                                                            return (

                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.tipo}
                                                                </TableCell>


                                                            );
                                                        }
                                                        else if (column.id == "numero") {
                                                            return (

                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.numero}
                                                                </TableCell>


                                                            );
                                                        }

                                                        else if (column.id == "importe") {
                                                            return (

                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {"$" + row.importe}
                                                                </TableCell>


                                                            );
                                                        }
                                                        else if (column.id == "comprobante") {
                                                            return (

                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    <div className="downloadIconContainer">
                                                                        <GrDocumentDownload className="documentSearchResultIcon" onChange={prepareBase64File("application/pdf", row.imagen, "comprobante_contribuciones", index)} onClick={() => openModal(row)} />
                                                                    </div>
                                                                </TableCell>


                                                            );
                                                        }



                                                    }

                                                })

                                                }
                                            </TableRow>
                                        );
                                    })

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <ThemeProvider theme={paginationTheme}>
                        <div className="paginationContainerStyle">
                            <Pagination count={secondaryPageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );

    }
    else if (showTab == 2 && allDataSecondaryTab == undefined || showTab == 2 && allDataSecondaryTab == null || showTab == 2 && allDataSecondaryTab == "" || allDataSecondaryTab.length == 0) {
        
        return(
             <div className = "documentContentContainer" >

               
                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                             <Tab className={tabClasses.btnTab0StyleDisabled} label='Mis Pagos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1Style} label='Mis Retenciones Impositivas.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>

                 <div className="paymentTaxesIconContainer">
                     <span className="paymentTaxesLegend">Segun detalle de "Formas de pago".</span>
                 </div>





                <Paper className={classes.root}>

                  
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {retention_columns.map((column) => (
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
                            <TableBody>
                                {

                                    <TableRow hover role="checkbox" className="valueNotFoundContainer">

                                   
                                    <div>
                                        <h5>No existen formas de pago registradas para este proveedor.</h5>
                                    </div>
                                  
                                 </TableRow>
                                 

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <ThemeProvider theme={paginationTheme}>
                        <div className="paginationContainerStyle">
                            <Pagination count={secondaryPageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );
    }


}
