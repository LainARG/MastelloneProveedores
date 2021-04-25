import React, { useEffect, useState } from 'react';
import '../resources/styles/documentBody.css';
import { makeStyles } from '@material-ui/core/styles';
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
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import pagination from '../pagination/pagination';
import SearchBar from "material-ui-search-bar";
import TuneIcon from '@material-ui/icons/Tune';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';



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

export default function Test() {
    const classes = useStyles();
    const [allDocs, setAllDocs] = useState("");
    const [allPays, setAllPays] = useState("");
    const [allData, setAllData] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pageQuantity, setPageQuantity] = useState(10);
    const rowsPerPage = 2;
    const [contextCtrl, setContextCtrl] = useState(0);
    
    const setContext = () => {
        
            setAllDocs(DocumentsContext.allDocuments);
            setAllPays(PaymentsContext.allPayments);
            dataMapper(allDocs, allPays);
        if (allDocs != "") {
            setTimeout(function () { setContextCtrl(1); }, 100);
            }
    }


useEffect(() => {
    if (contextCtrl < 1) {
        setContext();
    } 
    });

    const columns = [
        {
            id: 'Fecha_doc',
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

    const dataMapper = (alldocs, allpays) => {
        let alldata = [];
       
        for (let i = 0; i < alldocs.length; i++) {
            for (let j = 0; j < allpays.length;j++) {
                let objectData = {
                    fecha_documento: null,
                    estado: null,
                    tipo: null,
                    numero_documento: null,
                    numero_pago: null,
                    monto_bruto: null,
                    observaciones_pago: null,
                }

                if (alldocs[i].id_documento == allpays[j].id_documento) {
                    objectData.fecha_documento = alldocs[i].fecha_de_carga;
                    objectData.estado = alldocs[i].estado;
                    objectData.tipo = alldocs[i].tipo;
                    objectData.numero_documento = alldocs[i].numero_documento;
                    objectData.numero_pago = allpays[j].numero_pago;
                    objectData.monto_bruto = allpays[j].monto_bruto;
                    objectData.observaciones_pago = allpays[j].observaciones_pago;
                    alldata.push(objectData);
                }


            }
        }
        
        let pagData = pagination(alldata, alldata.length, rowsPerPage);
        setPageQuantity(pagData.length);
        setAllData(pagData);
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

        setTimeout(function () {}, 1000);
        return (
            <h1>Loading data...</h1>

            );
    }
    return (
        <div className="documentContentContainer"> 
        <Paper className={classes.root}>

                <div className="documentIconContainer">
                    <TuneIcon fontSize="large" />
                </div>
                
                    <div className="documentSearchBarContainer">
                        <input placeholder="Buscar por num. de documento" className="documentSearchBar"/>
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

                            allData[pageNumber-1].map((row) => {

                                return (

                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {


                                            for (let i = 0; i < allData.length; i++) {
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
                                                            {row.numero_pago}
                                                        </TableCell>
                                                    );
                                                }
                                                else if (column.id == "Monto") {
                                                    return (
                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                            {"$" + row.monto_bruto}
                                                        </TableCell>
                                                    );
                                                }
                                                else if (column.id == "Detalle_pago") {
                                                    return (
                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                            {row.observaciones_pago}
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
