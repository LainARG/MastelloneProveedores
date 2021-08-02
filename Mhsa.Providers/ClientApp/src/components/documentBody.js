import React, { useEffect, useState } from 'react';
import '../resources/styles/documentBody.css';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DocumentsContext from '../contexts/documentsContext';
import PaymentDetailContext from '../contexts/paymentDetailContext';
import DocumentTypesContext from '../contexts/documentTypesContext';
import DigitalDocumentsContext from '../contexts/digitalDocumentsContexts';
import StatesContext from '../contexts/statesContext';
import UserContext from '../contexts/userContext';
import PaymentsContext from '../contexts/paymentsContext';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import pagination from '../pagination/pagination';
import TuneIcon from '@material-ui/icons/Tune';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles, Tabs, Tab, Modal } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import { Menu, MenuItem } from '@material-ui/core';
import { GrDocumentDownload } from "react-icons/gr";


function createData(fecha_doc, estado, tipo, numero, np, monto, detalle_pago) {

    return { fecha_doc, estado, tipo, numero, np, monto, detalle_pago };
}



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
        opacity:'1'
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
        zIndex:'3000'
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
    const [allPaymentDetail, setAllPaymentDetail] = useState("");
    const [allDocumentTypes, setAllDocumentTypes] = useState("");
    const [allSearchData, setAllSearchData] = useState("");
    const [allPayments, setAllPayments] = useState("");
    const [allDigDocs, setAllDigDocs] = useState("");
    const [allStates, setAllStates] = useState("");
    const [allUsers, setAllUsers] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [firstTabPageQuantity, setFirstTabPageQuantity] = useState(10);
    const [secondTabPageQuantity, setSecondTabPageQuantity] = useState(10);
    const [value, setValue] = useState(0);
    const [showTab, setShowTab] = useState(0);
    const [openFilterMenu, setOpenFilterMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const [modal, setModal] = useState(false);
    const [paymentDetailsProps, setPaymentDetailsProps] = useState(false);
    const uploadDocumentUrl = "/documents/upload";
    const searchDocumentUrl = "/documents/search";
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

        if (allDocs == "") {
            DocumentsContext.fetchDocuments().then((e) => { setAllDocs(e); });
        }
        if (allUsers == "") {
            UserContext.fetchUsers().then((e) => { setAllUsers(e); });
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
        if (allDocumentTypes == "") {
            DocumentTypesContext.fetchDocumentTypes().then((e) => { setAllDocumentTypes(e); });
        }
        if (allPaymentDetail == "") {
            PaymentDetailContext.fetchAllPaymentDetail().then((e) => { setAllPaymentDetail(e); });
        }
        else if(allDigDocs != "" && allDocs != ""){
            dataMapper();
        }

    }, [allDocs, allDigDocs, allUsers, allStates, allPayments, allDocumentTypes, allPaymentDetail]);

    const columns = [
        {
            id: 'fecha_documento',
            label: 'Fecha de doc.',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Estado',
            label: 'Estado',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Tipo',
            label: 'Tipo',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Numero',
            label: 'Numero',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'NP',
            label: 'N.P.',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Monto',
            label: 'Monto',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Detalle_pago',
            label: 'Detalle del pago',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        }

    ];

    const electronics_columns= [
        {
            id: 'Fecha_carga',
            label: 'Fecha de carga',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Estado',
            label: 'Estado',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Cargado_por',
            label: 'Cargado por',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Descarga',
            label: 'Descarga',
            minWidth: 150,
            align: 'right',
            format: (value) => value.toFixed(2),
        }

    ];

    const dataMapper = () => {

        let allfirsttabdata = [];
        let allfirsttabdatabackup = [];
        let allsecondtabdata = [];

        if (allDocs != null && allDocs != undefined) {
            for (let i = 0; i < allDocs.length; i++) {

                let state = allStates.filter(state => state.id_estado == allDocs[i].id_estado);
                if (state != null && state != undefined && state != "") {
                    allDocs[i].estado = state[0].descripcion_abreviada;
                }
                let documentTypes = allDocumentTypes.filter(doc => doc.id_tipo_documento == allDocs[i].id_tipo_documento);
                if (documentTypes != null && documentTypes != undefined && documentTypes != "") {
                    allDocs[i].tipo = documentTypes[0].descripcion;
                }
                let detailPayment = allPaymentDetail.filter(payment => payment.id_documento == allDocs[i].id_documento);
                if (detailPayment != null && detailPayment != undefined && detailPayment != "") {
                    allDocs[i].detalle_pago_monto = detailPayment[0].monto_pagado_documento;
                    let paymentId = detailPayment[0].id_pago;
                    let paymentNumber = allPayments.filter(payment => payment.id_pago == paymentId);
                    if (paymentNumber != undefined && paymentNumber != "" && paymentNumber != null) {
                        paymentNumber = paymentNumber[0].numero_pago;
                        allDocs[i].numero_pago = paymentNumber;
                    }
                }

                allfirsttabdata.push(allDocs[i]);

            }
        }
        if (allDigDocs != null && allDigDocs != undefined) {

            for (let i = 0; i < allDigDocs.length; i++) {

                let state = allStates.filter(state => state.id_estado == allDocs[i].id_estado);
                if (state != null && state != undefined && state != "") {
                    allDigDocs[i].estado = state[0].descripcion_abreviada;
                }
                let user = allUsers.filter(user => user.id_usuario == allDigDocs[i].id_usuario_carga);
                if (user != null && user != undefined && user != "") {
                    allDigDocs[i].usuario = user[0].mail;
                }
                allsecondtabdata.push(allDigDocs[i]);

            }
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

    function documentReportRedirect(){
        window.location = '/documents/report';
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
       
    const FilterMenuHandler = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenFilterMenu(!openFilterMenu);
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
                        <option>En gestion adm.</option>
                        <option>En proceso de pago</option>
                        <option>A cobrar</option>
                        <option>Cobro parcial</option>
                        <option>Cobro total</option>
                        <option>Rechazado</option>

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

    function CancelDocumentFiltering() {

        setAllFirstTabData(allFirstTabDataBackup);
        setFirstTabPageQuantity(allFirstTabDataBackup.length);
        setOpenFilterMenu(false);
    }

    function FilterDocumentAction(e) {
        e.preventDefault();
        setOpenFilterMenu(false);
        let arrayPagedSuggestions = [];
        let pagedSuggestions = [];
        let menuFilterStateValue = document.getElementById("menuFilterStateSelect").value;

        if (menuFilterStateValue == "Cualquiera") {
            CancelDocumentFiltering();
        } else if (allFirstTabData.length == allFirstTabDataBackup.length) {

            let suggestions = JSON.parse(JSON.stringify(allFirstTabData));

            for (let i = 0; i < allFirstTabData.length; i++) {
                for (let j = 0; j < allFirstTabData[i].length; j++) {

                    if (allFirstTabData[i][j] != undefined) {

                        if (allFirstTabData[i][j].estado.toLowerCase() != menuFilterStateValue.toLowerCase()) {
                            delete suggestions[i][j]

                        } else {
                            arrayPagedSuggestions.push(allFirstTabData[i][j]);
                            pagedSuggestions = pagination(arrayPagedSuggestions, arrayPagedSuggestions.length, rowsPerPage);
                        }
                        setFirstTabPageQuantity(pagedSuggestions.length);
                        setAllFirstTabData(pagedSuggestions);
                    }
                }
            }
        } else {
            CancelDocumentFiltering();
        }

    }



    function searchPrimaryPageSuggestionsHandler(e) {
        e.preventDefault();
        CancelDocumentFiltering();
        let suggestions = [];


        if (e.target.value == "") {
            setAllFirstTabData(allFirstTabDataBackup);
        } else {


            for (let i = 0; i < allFirstTabData.length; i++) {
                for (let j = 0; j < allFirstTabData[i].length; j++) {

                    suggestions.push(allFirstTabData[i][j]);

                }
            }


                    suggestions = suggestions.filter(f => f != "");
                    suggestions = suggestions.filter(f => f != undefined);
                    suggestions = suggestions.filter(f => f.numero_documento.includes(e.target.value));
                    
                    let pagedSuggestions = pagination(suggestions, suggestions.length, rowsPerPage);
                    setFirstTabPageQuantity(pagedSuggestions.length);
                    setAllFirstTabData(pagedSuggestions);
                

            
         }
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

    const BodyModal = (

        <div className="modalStyle">

            <h2 className="modalTitleStyle">Detalle del pago.</h2>
            <span className="modalNormalFontStyle">Acerca del documento Num. {paymentDetailsProps.numero_documento}</span>

            <span className="modalBoldFontStyle">Num. de pago</span>
            <span className="modalBoldFontStyle">Monto pagado</span>
            <span className="modalBoldFontStyle">Estado</span><br/>
            <span className="modalNormalFontStyle1">{paymentDetailsProps.numero_pago}</span>
            <span className="modalNormalFontStyle2">{paymentDetailsProps.detalle_pago_monto }</span>
            <span className="modalNormalFontStyle3">{paymentDetailsProps.estado}</span>
            
            <button className="modalBtnStyle" onClick={() => closeModal()}>Cerrar</button>
            

        </div>
    );

    const PaymentDetailModal = (props) => {
        return (
            <div>

                <Modal
                    open={ modal }
                    onClose={ openModal }
                >
                    { BodyModal }

                </Modal>
            </div>
        );

    }

    function Redirector(url) {
        window.location = url;
    }
    

    if (allFirstTabData == undefined || allFirstTabData == null || allFirstTabData == "" || allFirstTabData == 0) {


        return (
            <div className="documentContentContainer">

                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0Style} label='Mis Documentos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Documentos Electronicos.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>

                <Paper className={classes.root}>

                    <div className="documentReportIconContainer" onClick={documentReportRedirect}>
                        <AssignmentReturnedIcon fontSize="large" /><span className="documentReportIconLegend">Reporte</span>
                    </div>

                    <div className="documentIconContainer1" >
                        <TuneIcon fontSize="large" onClick={FilterMenuHandler} />
                        <DocumentFilterMenu />
                    </div>

                    <div className="documentSearchBarContainer1">
                        <input type="text" placeholder="Buscar por num. de documento" className="documentSearchBar1" onChange={searchPrimaryPageSuggestionsHandler} />
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
                                {CancelDocumentFiltering}
                                <h5>No existen documentos para este proveedor!</h5>
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

    if (showTab == 0 && allFirstTabData != "" ) {

            return (
                <div className="documentContentContainer">

                    <div className="documentTabsContainer">

                        <ThemeProvider theme={documentTabsTheme}>
                            <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                                value={value} indicatorColor="secondary" textColor="primary"
                                TabIndicatorProps={{
                                    style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                                }}>
                                <Tab className={tabClasses.btnTab0Style} label='Mis Documentos.' onClick={firstTab}></Tab>
                                <Tab className={tabClasses.btnTab1StyleDisabled} label='Documentos Electronicos.' onClick={secondTab} />

                            </Tabs>
                        </ThemeProvider>


                    </div>






                    <Paper className={classes.root}>

                        <div className="documentReportIconContainer" onClick={documentReportRedirect}>
                            <AssignmentReturnedIcon fontSize="large" /><span className="documentReportIconLegend">Reporte</span>
                        </div>

                        <div className="documentIconContainer1" >
                            <TuneIcon fontSize="large" onClick={FilterMenuHandler} />
                            <DocumentFilterMenu />
                        </div>

                        <div className="documentSearchBarContainer1">
                            <input type="text" placeholder="Buscar por num. de documento" className="documentSearchBar1" onChange={searchPrimaryPageSuggestionsHandler} />
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
                                <TableBody id="documentTable">
                                    {
                                        
                                        allFirstTabData[pageNumber - 1].map((row, index) => {
                                            if (row != undefined) {
                                                return (

                                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                        {columns.map((column) => {


                                                            for (let i = 0; i < allFirstTabData.length; i++) {
                                                                if (column.id == "fecha_documento") {
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
                                                                else if (column.id == "Detalle_pago") {
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                            <b><AspectRatioIcon fontSize="large" className="documentDownloadRowIcon" onClick={() => openModal(row)} /></b>
                                                                            <PaymentDetailModal />
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
    if (showTab == 0 && allFirstTabData == "" || showTab == 0 && allFirstTabData == null || showTab == 0 && allFirstTabData == undefined) {

        return (
            <div className="documentContentContainer">

                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0Style} label='Mis Documentos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Documentos Electronicos.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>






                <Paper className={classes.root}>

                    <div className="documentReportIconContainer" onClick={documentReportRedirect}>
                        <AssignmentReturnedIcon fontSize="large" /><span className="documentReportIconLegend">Reporte</span>
                    </div>

                    <div className="documentIconContainer1" >
                        <TuneIcon fontSize="large" onClick={FilterMenuHandler} />
                        <DocumentFilterMenu />
                    </div>

                    <div className="documentSearchBarContainer1">
                        <input type="text" placeholder="Buscar por num. de documento" className="documentSearchBar1" onChange={searchPrimaryPageSuggestionsHandler} />
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
                            <TableBody id="documentTable">
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


    if (showTab == 1 && allSecondTabData != "" ) {
            return (
                <div className="documentContentContainer">


                    <div className="documentTabsContainer">

                        <ThemeProvider theme={documentTabsTheme}>
                            <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                                value={value} indicatorColor="secondary" textColor="primary"
                                TabIndicatorProps={{
                                    style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                                }}>
                                <Tab className={tabClasses.btnTab0StyleDisabled} label='Mis Documentos.' onClick={firstTab}></Tab>
                                <Tab className={tabClasses.btnTab1Style} label='Documentos Electronicos.' onClick={secondTab} />

                            </Tabs>
                        </ThemeProvider>


                    </div>

                    <div className="digDocumentIconContainer">
                        <div className="digDocumentIconPoint" onClick={() => Redirector(uploadDocumentUrl)}>
                            <ControlPointIcon fontSize="large"/> <b>Cargar</b>
                        </div>
                        <div className="digDocumentIconSettings" onClick={() => Redirector(searchDocumentUrl)}>
                            <SettingsEthernetIcon fontSize="large"/>&nbsp;<b>Consultar</b>
                        </div>
                    </div>





                    <Paper className={classes.root}>


                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {electronics_columns.map((column) => (
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

                                        allSecondTabData[pageNumber - 1].map((row,index) => {

                                            return (

                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {electronics_columns.map((column) => {


                                                        for (let i = 0; i < allSecondTabData.length; i++) {
                                                            if (column.id == "Fecha_carga") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.fecha_carga}
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
                                                            else if (column.id == "Cargado_por") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.usuario}
                                                                    </TableCell>
                                                                );
                                                            }
                                                            else if (column.id == "Descarga") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        <div className="downloadIconContainer">
                                                                            <GrDocumentDownload className="documentSearchResultIcon" onChange={prepareBase64File(row.type, row.imagen, row.filename, index)} onClick={(e) => downloadBase64File(i)} />
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
                                <Pagination count={secondTabPageQuantity} onChange={paginationHandler} />
                            </div>
                        </ThemeProvider>

                    </Paper>
                </div>
            );
    }
    else if (showTab == 1 && allSecondTabData == "" || showTab == 1 && allSecondTabData == null || showTab == 1 && allSecondTabData == undefined) {
        return (
            <div className="documentContentContainer">


                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0StyleDisabled} label='Mis Documentos.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1Style} label='Documentos Electronicos.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>

                <div className="digDocumentIconContainer">
                    <div className="digDocumentIconPoint" onClick={() => Redirector(uploadDocumentUrl)}>
                        <ControlPointIcon fontSize="large" /> <b>Cargar</b>
                    </div>
                    <div className="digDocumentIconSettings" onClick={() => Redirector(searchDocumentUrl)}>
                        <SettingsEthernetIcon fontSize="large" />&nbsp;<b>Consultar</b>
                    </div>
                </div>





                <Paper className={classes.root}>


                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {electronics_columns.map((column) => (
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
                                <h5>No existen documentos electronicos para este proveedor!</h5>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <ThemeProvider theme={paginationTheme}>
                        <div className="paginationContainerStyle">
                            <Pagination count={secondTabPageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );
    }
    }


