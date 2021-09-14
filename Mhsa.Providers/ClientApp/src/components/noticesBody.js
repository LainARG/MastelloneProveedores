import React, { useEffect, useState } from 'react';
import '../resources/styles/documentBody.css';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DocumentsContext from '../contexts/documentsContext';
import DigitalDocumentsContext from '../contexts/digitalDocumentsContexts';
import StatesContext from '../contexts/statesContext';
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
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
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



export default function NoticesBody() {
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


    const closeModal = () => {
        setModal(false);
    }
    
    useEffect(() => {

        if (allDocs == "") {
            DocumentsContext.fetchDocuments().then((e) => { setAllDocs(e); });
            DigitalDocumentsContext.fetchDocuments().then((e) => { setAllDigDocs(e); });
            StatesContext.fetchStates().then((e) => { setAllStates(e); });
            PaymentsContext.fetchPayments().then((e) => { setAllPayments(e); });
        } else {
            dataMapper(allDocs);
        }

    }, [allDocs, allDigDocs, modal]);

    const columns = [
        {
            id: 'fecha_aviso',
            label: '',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'titulo_aviso',
            label: '',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'conformidad',
            label: 'Conformidad',
            minWidth: 150,
            align: 'right',
            format: (value) => value.toFixed(2),
        }

    ];

    const common_notices_columns= [
        {
            id: 'fecha_aviso',
            label: '',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'titulo_aviso',
            label: '',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },

    ];

    const dataMapper = (alldocs) => {
        let allfirsttabdata = [];
        let allfirsttabdatabackup = [];
        let allsecondtabdata = [];
        let allpayments = [];
        let paymentStateStringValue = "";
        let stateStringValue = "";

            for (let j = 0; j < allDocs.length;j++) {
                let objectData = {
                    fecha_aviso: null,
                    titulo_aviso: null,
                    cuerpo_aviso: null,
                    conformidad: null,
                }

                let objectData2 = {
                    fecha_aviso: null,
                    titulo_aviso: null,
                    cuerpo_aviso: null,
                    conformidad: null,
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
                    objectData.numero_documento = alldocs[j].letra_documento + "-" + alldocs[j].prefijo_documento+"-"+alldocs[j].numero_documento;
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


                    <span className={classes.documentFilterMenulegend1}>Conformidad</span>

                    <select
                        id="menuFilterStateSelect"
                        className={classes.documentFilterMenuSelect1}
                    >
                        <option>Sin brindar</option>
                        <option>Brindada</option>

                    </select>

                    <span className={classes.documentFilterMenulegend1}>Fecha de aviso</span>


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

    //const BodyModal = (
    const SuccessModal = (
    <div className="modalStyle">

        <h2 className="modalTitleStyle">¡Listo!</h2>
        <span className="modalNormalFontStyle">Conformidad brindada.</span>
        
        <button className="modalBtnStyle" onClick={() => closeModal()}>Continuar</button>
        

    </div>
    );

    const FailureModal = (
        <div className="modalStyle">
    
            <h2 className="modalTitleStyle">Lo lamentamos...</h2>
            <p className="modalNormalFontStyle">La conformidad no se pudo brindar.</p>
            <p className="modalNormalFontStyle">¡Intentá nuevamente!</p>
            
            <button className="modalBtnStyle" onClick={() => closeModal()}>Reintentar</button>
        </div>
    );

    const OpenNotice = (notice) => {
        localStorage.setItem("currentNotice", JSON.stringify(notice));
        window.location = "/notices/view";
    }

    const OpenCommonNotice = (notice) => {
        localStorage.setItem("currentNotice", JSON.stringify(notice));
        window.location = "/notices/common-view";
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
                            <Tab className={tabClasses.btnTab0Style} label='Avisos vigentes.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Biblioteca de avisos.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


                </div>

                <Paper className={classes.root}>

                    <div className="documentIconContainer1" >
                        <TuneIcon fontSize="large" onClick={FilterMenuHandler} />
                        <DocumentFilterMenu />
                    </div>

                    <div className="documentSearchBarContainer1">
                        <input type="text" placeholder="Buscar por título de aviso" className="documentSearchBar1" onChange={searchPrimaryPageSuggestionsHandler} />
                    </div>

                    <div className="documentIconContainer2">
                        <SearchRoundedIcon fontSize="large" />
                    </div>


                    <Typography className={classes.bold} variant="h5">Destacados.</Typography>
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
                                { CancelDocumentFiltering }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <ThemeProvider theme={paginationTheme}>
                        <div className="paginationContainerStyle">
                            <Pagination count={firstTabPageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>
                    
                    <Typography className={classes.bold} variant="h5">Sin destacar.</Typography>
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
                                <Tab className={tabClasses.btnTab0Style} label='Avisos vigentes.' onClick={firstTab}></Tab>
                                <Tab className={tabClasses.btnTab1StyleDisabled} label='Biblioteca de avisos.' onClick={secondTab} />

                            </Tabs>
                        </ThemeProvider>


                    </div>






                    <Paper className={classes.root}>

                        <div className="documentIconContainer1" >
                            <TuneIcon fontSize="large" onClick={FilterMenuHandler} />
                            <DocumentFilterMenu />
                        </div>

                        <div className="documentSearchBarContainer1">
                            <input type="text" placeholder="Buscar por título de aviso" className="documentSearchBar1" onChange={searchPrimaryPageSuggestionsHandler} />
                        </div>

                        <div className="documentIconContainer2">
                            <SearchRoundedIcon fontSize="large" />
                        </div>

                        <Typography className={classes.bold} variant="h5">Destacados.</Typography>
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
                                                                if (column.id == "fecha_aviso") {
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                            {row.fecha_aviso}
                                                                        </TableCell>
                                                                    );
                                                                }
                                                                else if (column.id == "titulo_aviso") {
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                            {row.titulo_aviso}
                                                                        </TableCell>
                                                                    );
                                                                }
                                                                else if (column.id == "conformidad") {
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                            {
                                                                            row.titulo_aviso ?                
                                                                                <b><CloseIcon fontSize="large" className="documentDownloadRowIcon" onClick={() => OpenNotice(row)} /></b>
                                                                            :
                                                                                <b><CheckIcon fontSize="large" className="documentDownloadRowIcon" onClick={() => OpenNotice(row)} /></b>
                                                                            }
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
                        <Typography className={classes.bold} variant="h5">Sin destacar.</Typography>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {common_notices_columns.map((column) => (
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
                                                        {common_notices_columns.map((column) => {


                                                            for (let i = 0; i < allFirstTabData.length; i++) {
                                                                if (column.id == "fecha_aviso") {
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                            {row.fecha_aviso}
                                                                        </TableCell>
                                                                    );
                                                                }
                                                                else if (column.id == "titulo_aviso") {
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable} onClick={() => OpenCommonNotice(row)}>
                                                                            {row.titulo_aviso}
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
                                <Tab className={tabClasses.btnTab0StyleDisabled} label='Avisos vigentes.' onClick={firstTab}></Tab>
                                <Tab className={tabClasses.btnTab1Style} label='Biblioteca de avisos.' onClick={secondTab} />

                            </Tabs>
                        </ThemeProvider>


                    </div>

                    <div className="documentIconContainer1" >
                        <TuneIcon fontSize="large" onClick={FilterMenuHandler} />
                        <DocumentFilterMenu />
                    </div>

                    <div className="documentSearchBarContainer1">
                        <input type="text" placeholder="Buscar por título de aviso" className="documentSearchBar1" onChange={searchPrimaryPageSuggestionsHandler} />
                    </div>

                    <div className="documentIconContainer2">
                        <SearchRoundedIcon fontSize="large" />
                    </div>

                    <Paper className={classes.root}>

                        <Typography className={classes.bold} variant="h5">Destacados.</Typography>
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

                                        allSecondTabData[pageNumber - 1].map((row,index) => {

                                            return (

                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {


                                                        for (let i = 0; i < allSecondTabData.length; i++) {
                                                            if (column.id == "fecha_aviso") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.fecha_aviso}
                                                                    </TableCell>
                                                                );
                                                            }
                                                            else if (column.id == "titulo_aviso") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {row.titulo_aviso}
                                                                    </TableCell>
                                                                );
                                                            }
                                                            else if (column.id == "conformidad") {
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {
                                                                        row.titulo_aviso ?                
                                                                            <b><CloseIcon fontSize="large" className="documentDownloadRowIcon" onClick={() => OpenNotice(row)} /></b>
                                                                        :
                                                                            <b><CheckIcon fontSize="large" className="documentDownloadRowIcon" onClick={() => OpenNotice(row)} /></b>
                                                                        }
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
                        <Typography className={classes.bold} variant="h5">Sin destacar.</Typography>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {common_notices_columns.map((column) => (
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
                                                        {common_notices_columns.map((column) => {


                                                            for (let i = 0; i < allFirstTabData.length; i++) {
                                                                if (column.id == "fecha_aviso") {
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                            {row.fecha_aviso}
                                                                        </TableCell>
                                                                    );
                                                                }
                                                                else if (column.id == "titulo_aviso") {
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable} onClick={() => OpenCommonNotice(row)}>
                                                                            {row.titulo_aviso}
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
                                <Pagination count={secondTabPageQuantity} onChange={paginationHandler} />
                            </div>
                        </ThemeProvider>

                    </Paper>
                </div>
            );
        }
    }


