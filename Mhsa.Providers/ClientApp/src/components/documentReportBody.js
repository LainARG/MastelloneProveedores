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
import { makeStyles, Tabs, Tab } from '@material-ui/core';
import { AiOutlineFilePdf } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";



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



export default function DocumentReportBody() {
    const classes = useStyles();
    const tabClasses = useTabStyles();
    const [allDocs, setAllDocs] = useState("");
    const [allPays, setAllPays] = useState("");
    const [allData, setAllData] = useState("");
    const [allDigDocs, setAllDigDocs] = useState("");
    const [allStates, setAllStates] = useState("");
    const [allPaymentDetail, setAllPaymentDetail] = useState("");
    const [allDocumentTypes, setAllDocumentTypes] = useState("");
    const [allPayments, setAllPayments] = useState("");
    const [allUsers, setAllUsers] = useState("");
    const [dataChargeController, setDataChargeController] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageQuantity, setPageQuantity] = useState(10);
    const [contextCtrl, setContextCtrl] = useState(0);
    const [value, setValue] = useState(0);
    const [showTab, setShowTab] = useState(1);
    const [openFilterMenu, setOpenFilterMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const rowsPerPage = 8;



    useEffect(() => {

        if (allDocs == "") {
            DocumentsContext.fetchDocuments().then((e) => { setAllDocs(e); });
        }
        else if (allUsers == "") {
            UserContext.fetchUsers().then((e) => { setAllUsers(e); });
        }
        else if (allDigDocs == "") {
            DigitalDocumentsContext.fetchDocuments().then((e) => { setAllDigDocs(e); });
        }
        else if (allStates == "") {
            StatesContext.fetchStates().then((e) => { setAllStates(e); });
        }
        else if (allPayments == "") {
            PaymentsContext.fetchPayments().then((e) => { setAllPayments(e); });
        }
        else if (allDocumentTypes == "") {
            DocumentTypesContext.fetchDocumentTypes().then((e) => { setAllDocumentTypes(e); });
        }
        else if (allPaymentDetail == "") {
            PaymentDetailContext.fetchPaymentDetailByProvider().then((e) => { setAllPaymentDetail(e); });
        }
        else {
            dataMapper();
        }
        

    }, [allDocs, allDigDocs, allUsers, allStates, allPayments, allDocumentTypes, allPaymentDetail]);

    const columns = [
        {
            id: 'fecha_carga',
            label: 'Fecha de doc.',
            minWidth: 100,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'estado',
            label: 'Estado',
            minWidth: 100,
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
            id: 'numero_documento',
            label: 'Numero',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'np',
            label: 'N.P.',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'monto',
            label: 'Monto',
            minWidth: 150,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        }

    ];


    const dataMapper = () => {


        let alldata = [];

        for (let i = 0; i < allDocs.length; i++) {
            let state = allStates.filter(state => state.id_estado == allDocs[i].id_estado);
            if (state != null && state != undefined && state != "") {
                allDocs[i].estado = state[0].descripcion_abreviada;
            }
            let documentTypes = allDocumentTypes.filter(doc => doc.id_tipo_documento == allDocs[i].id_tipo_documento);
            if (documentTypes != null && documentTypes != undefined && documentTypes != "") {
                allDocs[i].tipo = documentTypes[0].descripcion;
            }
            alldata.push(allDocs[i]);
        }

        let pagData = pagination(alldata, alldata.length, rowsPerPage);
        setPageQuantity(pagData.length);
        setAllData(pagData);
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

    if (allData == undefined || allData == null || allData == "") {


        return (
            <h1>Loading data...</h1>

        );

    } else {

        return (
            <div className="documentContentContainer">


                <Paper className={classes.root}>

                    <div className="documentReportLegend">
                        <span> Reporte - Mis Documentos </span>
                    </div>

                    <div>
                        <SiMicrosoftexcel className="documentReportExcelIcon" />
                    </div>

                    <div>
                        <AiOutlineFilePdf className="documentReportPdfIcon" />
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

                                    allData[pageNumber - 1].map((row) => {

                                        return (

                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    console.log(row);
                                                    for (let i = 0; i < allData.length; i++) {
                                                        if (column.id == "fecha_carga") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.fecha_documento}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "estado") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.estado}
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
                                                        else if (column.id == "numero_documento") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.numero_documento}
                                                                </TableCell>
                                                            );
                                                        }

                                                        else if (column.id == "np") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.nota_pedido}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "monto") {
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


    


