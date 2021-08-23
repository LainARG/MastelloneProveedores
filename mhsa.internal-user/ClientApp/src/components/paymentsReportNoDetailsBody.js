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
import PaymentsContext from '../contexts/paymentsContext';
import StatesContext from '../contexts/statesContext';
import DigitalDocumentsContext from '../contexts/digitalDocumentsContexts';
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



export default function DocumentReportBody() {
    const classes = useStyles();
    const tabClasses = useTabStyles();
    const [allDocs, setAllDocs] = useState("");
    const [allPays, setAllPays] = useState("");
    const [allData, setAllData] = useState("");
    const [allDigDocs, setDigDocs] = useState("");
    const[allStates, setAllStates] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pageQuantity, setPageQuantity] = useState(10);
    const [contextCtrl, setContextCtrl] = useState(0);
    const [value, setValue] = useState(0);
    const [showTab, setShowTab] = useState(1);
    const [openFilterMenu, setOpenFilterMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const rowsPerPage = 8;
   


    useEffect(() => {


        if (allPays == "" || allStates == "") {

            PaymentsContext.fetchPayments().then((e) => { setAllPays(e); });
            StatesContext.fetchStates().then((e) => { setAllStates(e) });
        }
        else {
             dataMapper();
        }

    }, [allPays]);

    const columns = [
        {
            id: 'numero_pago',
            label: 'Numero de pago',
            minWidth: 100,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'retirar_en',
            label: 'Retirar en',
            minWidth: 100,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'partir_de',
            label: 'A partir de',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'estado',
            label: 'Estado',
            minWidth: 175,
            align: 'left',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'total_pago',
            label: 'Neto a cobrar',
            minWidth: 150,
            align: 'right',
            format: (value) => value.toFixed(2),
        }

    ];


    const dataMapper = () => {
        let alldata;

        if (allData != null) {
            alldata = allPays.filter((payment) => {
                if (payment.id_pago > 0 && payment.id_estado > 0) {
                    payment.id_estado = allStates.filter(state => state.id_estado == payment.id_estado)[0].descripcion_abreviada;
                    return payment;
                }
            });
        }

        if (alldata != undefined) {
            let pagData = pagination(alldata, alldata.length, rowsPerPage);
            setPageQuantity(pagData.length);
            setAllData(pagData);
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



    if (allData == undefined || allData == null || allData == "") {

        
        return (
            <h1>Loading data...</h1>

        );

    }
    
        return (
            <div className="documentContentContainer">

               
                <Paper className={classes.root}>

                    <div className="documentReportLegend">
                       <span> Reporte - Mis Pagos </span>
                    </div>

                    
                        <SiMicrosoftexcel className="documentReportExcelIcon" />
                    

                    
                        <AiOutlineFilePdf className="documentReportPdfIcon" />
                    
                    <div className="documentReportLegend2">
                        <span> <b>CUIT:</b> { localStorage.getItem("prvCuit") }</span>
                    </div>

                    <div className="documentReportLegend3">
                        <span> <b>Proveedor:</b> { localStorage.getItem("prvName") }</span>
                    </div>
                    
                    <div className="documentReportLegend1">
                        <span> Sin detalle</span>
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


                                                    for (let i = 0; i < allData.length; i++) {
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
                                                                    {row.lugar_retiro}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "partir_de") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.fecha_disponible}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "estado") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.id_estado}
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
    


