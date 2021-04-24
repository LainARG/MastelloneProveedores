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
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DocumentsContext from '../contexts/documentsContext';
import PaymentsContext from '../contexts/paymentsContext';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import pagination from '../pagination/pagination';


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

function createData(fecha_doc, estado, tipo, numero, np, monto, detalle_pago) {

    return { fecha_doc, estado, tipo, numero, np, monto, detalle_pago };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961)
];

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
    const [allDocs, setAllDocs] = useState(rows);
    const [allPays, setAllPays] = useState(rows);
    const [allData, setAllData] = useState(rows);
    const [pageNumber, setPageNumber] = useState(1);
    const [contextCtrl, setContextCtrl] = useState(0);

    const setContext = () => {
        if (contextCtrl<1) {
            if (allDocs.length < 3 || allDocs.length == undefined) {
                setAllDocs(DocumentsContext.allDocuments);
                setAllPays(PaymentsContext.allPayments);
            }
            if (allDocs.length >= 3) {
                setAllData(allDocs.concat(allPays));
                setContextCtrl(1);
                console.log(allData);
            }
        }

    }


    useEffect(() => {

        
            setTimeout(function () {
                setContext();
            }, 10);
        
    
    });



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

        let label = e.target.ariaLabel;
        let nPage = label.split(" ");
        let pageNum = parseInt(nPage[nPage.length - 1]);
        setPageNumber(pageNum);

     }


    return (
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
                    <TableBody>
                        {
                            
                            allData.map((row) => {

                                return (
                                    
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            
                                            
                                            for (let i = 0; i < allData.length; i++) {
                                                if (column.id == "Fecha_doc") {
                                                    return (
                                                        <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                            {row.fecha_de_carga}
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
                                                    console.log(allPays);
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
                    <Pagination count={allPays.length + allDocs.length} onChange={paginationHandler} page={pageNumber} />
               </div>
             </ThemeProvider>   
           
        </Paper>
    );
}
