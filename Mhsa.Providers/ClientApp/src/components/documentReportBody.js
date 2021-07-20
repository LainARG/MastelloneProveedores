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
        if (allDocs == "" || allStates== "") {
            DocumentsContext.fetchDocuments().then((e) => { setAllDocs(e); });
            StatesContext.fetchStates().then((e) => { setAllStates(e); });
        }
        if (allDocs != "" && allStates != "" && dataChargeController != 1) {
            dataMapper();
        }

    });

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
        setDataChargeController(1);
        let alldata = [];

        
        for (let i = 0; i < allDocs.length; i++) {

            let documentState = (allStates.filter(state => state.id_estado == allDocs[i].id_estado))[0].descripcion_abreviada;
            let documentNumber = allDocs[i].letra_documento + "-" + allDocs[i].prefijo_documento + "-" + allDocs[i].numero_documento;

            let obj = {
                    fecha_carga: allDocs[i].fecha_documento,
                    estado: documentState,
                    tipo: null,
                    numero_documento: documentNumber,
                    numero_pago: allDocs[i].numero_pago,
                    monto: allDocs[i].monto,
                    nota_pedido: allDocs[i].nota_pedido
            }

            alldata.push(obj);                

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
                                                        else if (column.id == "numero") {
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


    


