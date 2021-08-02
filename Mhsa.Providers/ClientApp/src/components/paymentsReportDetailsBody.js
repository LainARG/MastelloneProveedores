import React, { useEffect, useState } from 'react';
import NextPaymentComponent from '../components/nextPaymentComponent';
import '../resources/styles/documentBody.css';
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
import PaymentDetailContext from '../contexts/paymentDetailContext';
import DocumentsContext from '../contexts/documentsContext';
import DocumentTypesContext from '../contexts/documentTypesContext';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import pagination from '../pagination/pagination';
import { makeStyles, Tabs, Tab } from '@material-ui/core';
import { AiOutlineFilePdf } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";





export default function PaymentsReportDetailsBody() {

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
    });


    const classes = useStyles();
    const [allPays, setAllPays] = useState("");
    const [allDocs, setAllDocs] = useState("");
    const [allPaymentForms, setAllPaymentForms] = useState("");
    const [allPaymentDetails, setAllPaymentDetails] = useState("");
    const [allDocumentTypes, setAllDocumentTypes] = useState("");
    const [allStates, setAllStates] = useState("");
    const [allDataPrimaryTab, setAllDataPrimaryTab] = useState("");
    const [allDataSecondaryTab, setAllDataSecondaryTab] = useState("");
    const [allDataTertiaryTab, setAllDataTertiaryTab] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pageQuantity, setPageQuantity] = useState(10);
    
    
   


    useEffect(() => {


        if (allPays == "") {
            PaymentsContext.fetchPayments().then((e) => { setAllPays(e) });
        }
        else if (allPaymentDetails == "") {
            PaymentDetailContext.fetchPaymentDetailByProvider().then((e) => { setAllPaymentDetails(e) });
        }
        if (allDocs == "") {
            DocumentsContext.fetchDocuments().then((e) => { setAllDocs(e) });
        }
        if (allDocumentTypes == "") {
            DocumentTypesContext.fetchDocumentTypes().then((e) => { setAllDocumentTypes(e) });
        }
        if (allPaymentForms == "") {
            PaymentsFormsContext.fetchAllPaymentsForms().then((e) => { setAllPaymentForms(e) });
        }
        if (allStates == "") {
            StatesContext.fetchStates().then((e) => { setAllStates(e) });
        }

        else {
            dataMapper();
        }

    }, [allPays, allDocs, allPaymentForms, allPaymentDetails]);




    const columns = [
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
            format: (value) => value.toLocaleString('en-US'),
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
            minWidth: 175,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'importe',
            label: 'Importe',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toFixed(2),
        }
    ];

    const retention_columns= [
        {
            id: 'fecha_documento',
            label: 'Fecha documento',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'tipo',
            label: 'Tipo',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'numero',
            label: 'Numero',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'nota_pedido',
            label: 'N.P.',
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
        }

    ];

    const dataMapper = (allpays, alltaxes) => {
        if (allPays != null && allDocs != null && allPaymentForms != null && allPaymentDetails != null && allPaymentForms != "") {
            let alldataPTab = [];
            let alldataSTab = [];
            let alldataTTab = [];
            let STab;
            let paysDet;
            let docs = [];

            
            
            alldataPTab = allPays.filter((payment, index) => {
                let state = allStates.filter(state => state.id_estado == payment.id_estado);
                
                STab = allPaymentForms.filter(pf => pf.id_pago == payment.id_pago);
                if (STab != undefined && STab[0] != undefined) {
                    alldataSTab.push(STab);
                }

                paysDet = allPaymentDetails.filter(pd => pd.id_pago == payment.id_pago);

                paysDet.filter(pd => {

                    allDocs.filter((doc) => {
                        if (pd.id_documento == doc.id_documento) {
                            if (!docs.includes(doc)) {
                                docs.push(doc);
                            } 
                        }
                    });
                });
                console.log(docs);
                alldataTTab.push(docs);
                docs = [];

                if (state[0] != undefined) {
                    state = state[0].descripcion_abreviada;
                    payment.estado = state;
                    return payment;
                }
            });

            console.log(alldataTTab);

            let pagData = pagination(alldataPTab, alldataPTab.length, 1);
            setPageQuantity(pagData.length);
            setAllDataPrimaryTab(pagData);
            setAllDataSecondaryTab(alldataSTab);
            setAllDataTertiaryTab(alldataTTab);
        }
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



    if (allDataPrimaryTab == undefined || allDataPrimaryTab == null || allDataPrimaryTab == "") {

        
        return (
            <div className="documentContentContainer">


                <Paper className={classes.root}>

                    <div className="documentReportLegend">
                        <span> Reporte - Mis Pagos </span>
                    </div>


                    <SiMicrosoftexcel className="paymentReportExcelIcon" />



                    <AiOutlineFilePdf className="paymentReportPdfIcon" />

                    <div className="documentReportLegend2">
                        <span> <b>CUIT:</b> {localStorage.getItem("prvCuit")}</span>
                    </div>

                    <div className="documentReportLegend3">
                        <span> <b>Proveedor:</b> {localStorage.getItem("prvName")}</span>
                    </div>

                    <div className="documentReportLegend1">
                        <span> Detallado</span>
                    </div>


                    <div className="nextPaymentTableLegend">

                        <span className="nextPaymentLegend1">Numero de pago</span>
                        <span className="nextPaymentLegend2">Retirar en</span>
                        <span className="nextPaymentLegend3">A partir de</span>
                        <span className="nextPaymentLegend4">Estado</span>
                        <span className="nextPaymentLegend5">Total pago</span><br />





                        <span className="nextPaymentLegend6">0800-00525245</span>
                        <span className="nextPaymentLegend7">MHSA Tokio</span>
                        <span className="nextPaymentLegend8">12/04/1991</span>
                        <span className="nextPaymentLegend9">A retirar</span>
                        <span className="nextPaymentLegend10">$ 452.0</span>

                    </div>

                    <div className="paymentFormReportLegend">
                        <span> Formas de pago.</span>
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
                            </TableBody>
                        </Table>
                    </TableContainer>






                    <ThemeProvider theme={paginationTheme}>
                        <div className="paginationContainerStyle">
                            <Pagination count={pageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );
    }


    if (allDataPrimaryTab != undefined || allDataPrimaryTab != null || allDataPrimaryTab != "") {

        return (
            <div className="documentContentContainer">


                <Paper className={classes.root}>

                    <div className="documentReportLegend">
                        <span> Reporte - Mis Pagos </span>
                    </div>


                    <SiMicrosoftexcel className="paymentReportExcelIcon" />



                    <AiOutlineFilePdf className="paymentReportPdfIcon" />

                    <div className="documentReportLegend2">
                        <span> <b>CUIT:</b> { localStorage.getItem("prvCuit") }</span>
                    </div>

                    <div className="documentReportLegend3">
                        <span> <b>Proveedor:</b> { localStorage.getItem("prvName") }</span>
                    </div>

                    <div className="documentReportLegend1">
                        <span> Detallado</span>
                    </div>


                    <div className="nextPaymentTableLegend">

                        <span className="nextPaymentLegend1">Numero de pago</span>
                        <span className="nextPaymentLegend2">Retirar en</span>
                        <span className="nextPaymentLegend3">A partir de</span>
                        <span className="nextPaymentLegend4">Estado</span>
                        <span className="nextPaymentLegend5">Total pago</span><br />





                        <span className="nextPaymentLegend6">{allDataPrimaryTab[pageNumber - 1][0].numero_pago}</span>
                        <span className="nextPaymentLegend7">{allDataPrimaryTab[pageNumber - 1][0].lugar_retiro}</span>
                        <span className="nextPaymentLegend8">{allDataPrimaryTab[pageNumber - 1][0].fecha_disponible}</span>
                        <span className="nextPaymentLegend9">{allDataPrimaryTab[pageNumber - 1][0].estado}</span>
                        <span className="nextPaymentLegend10">$ {allDataPrimaryTab[pageNumber - 1][0].total_pago}</span>

                    </div>

                    <div className="paymentFormReportLegend">
                        <span> Formas de pago.</span>
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

                                    allDataSecondaryTab[pageNumber - 1].map((row) => {
                                        return (

                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {


                                                    for (let i = 0; i < allDataPrimaryTab.length; i++) {
                                                        if (column.id == "fecha_emision") {
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
                                                                    {row.descripcion}
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


                    <div className="paymentFormReportLegend">
                        <span> Documentos.</span>
                    </div>


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

                                    allDataTertiaryTab[pageNumber - 1].map((row) => {

                                        return (

                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {retention_columns.map((column) => {


                                                    for (let i = 0; i < allDataSecondaryTab.length; i++) {
                                                        if (column.id == "fecha_documento") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.fecha_documento}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "tipo") {
                                                            return (

                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.tipo_imp}
                                                                </TableCell>


                                                            );
                                                        }
                                                        else if (column.id == "numero") {
                                                            return (

                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.numero_documento}
                                                                </TableCell>


                                                            );
                                                        }
                                                        else if (column.id == "nota_pedido") {
                                                            return (

                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.nota_pedido}
                                                                </TableCell>


                                                            );
                                                        }
                                                        else if (column.id == "importe") {
                                                            return (

                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {"$" + row.monto}
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
                            <Pagination count={pageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );
    }


}
