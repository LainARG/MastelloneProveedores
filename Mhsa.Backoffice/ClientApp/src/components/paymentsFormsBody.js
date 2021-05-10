import React, { useEffect, useState } from 'react';
import NextPaymentComponent from '../components/nextPaymentComponent';
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
import TaxesContext from '../contexts/taxesContext';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import pagination from '../pagination/pagination';
import { makeStyles, Tabs, Tab } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';


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



export default function PaymentsFormsBody() {
    const classes = useStyles();
    const tabClasses = useTabStyles();
    const [allPays, setAllPays] = useState("");
    const [allTaxes, setAllTaxes] = useState("");
    const [allDataPrimaryTab, setAllDataPrimaryTab] = useState("");
    const [allDataSecondaryTab, setAllDataSecondaryTab] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [primaryPageQuantity, setPrimaryPageQuantity] = useState(10);
    const [secondaryPageQuantity, setSecondaryPageQuantity] = useState(10);
    const [contextCtrl, setContextCtrl] = useState(0);
    const [value, setValue] = useState(0);
    const [showTab, setShowTab] = useState(1);
    const [openFilterMenu, setOpenFilterMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const rowsPerPage = 4;
    
    
    const setContext = () => {
        
            
        setAllPays(PaymentsContext.allPayments);
        setAllTaxes(TaxesContext.allTaxes);
            dataMapper(allPays, allTaxes);
        if (allPays!= "") {
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
            id: 'partir_de',
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
            id: 'monto_bruto',
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
        let alldataPTab = [];
        let alldataSTab = [];
        
        for (let i = 0; i < allpays.length; i++) {
            
                let objectData = {
                    numero_pago: null,
                    retirar_en: null,
                    estado_pago: null,
                    monto_pago: null,
                    detalle_pago: null,
                    fecha_pago: null,
                    tipo_pago: null,
                    comprobante: null,
            }

            objectData.numero_pago = allpays[i].numero_pago;
            objectData.retirar_en = allpays[i].direccion_retiro;
            objectData.estado_pago = allpays[i].estado_pago
            objectData.monto_pago = allpays[i].monto_bruto;
            objectData.detalle_pago = allpays[i].observaciones_pago;
            objectData.fecha_pago = allpays[i].fecha_pago_retiro;
            objectData.tipo_pago = allpays[i].tipo_pago;
            objectData.comprobante = null;
            alldataPTab.push(objectData);
            }

        
            for (let i = 0; i < allpays.length; i++) {
                for (let j = 0; j < alltaxes.length; j++) {

                    let objectData = {
                        numero_pago: null,
                        retirar_en: null,
                        estado_pago: null,
                        monto_pago: null,
                        detalle_pago: null,
                        fecha_pago: null,
                        tipo_pago: null,
                        tipo_imp: null,
                        numero_imp: null,
                        comprobante: null,
                    }

                    if (allpays[i].numero_pago == alltaxes[j].numero_pago) {
                        objectData.numero_pago = allpays[i].prefijo_pago+"-"+allpays[i].numero_pago;
                        objectData.monto_pago = allpays[i].total_pago;
                        objectData.fecha_pago = allpays[i].fecha_disponible;
                        objectData.retirar_en = allpays[i].lugar_retiro;
                        objectData.estado_pago = allpays[i].id_estado
                        objectData.comprobante = null;
                        objectData.tipo_imp = alltaxes[j].tipo_impuesto;
                        objectData.numero_imp = alltaxes[j].codigo_concepto;
                        alldataSTab.push(objectData);
                    }

                }

            }
        console.log(alldataPTab);
        console.log(alldataSTab);
        let pagData = pagination(alldataPTab, alldataPTab.length, rowsPerPage);
        let pagData1 = pagination(alldataSTab, alldataSTab.length, rowsPerPage);
        setPrimaryPageQuantity(pagData.length);
        setSecondaryPageQuantity(pagData1.length);
        setAllDataPrimaryTab(pagData);
        setAllDataSecondaryTab(pagData1);
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



    if (allDataPrimaryTab == undefined || allDataPrimaryTab == null || allDataPrimaryTab == "") {

        
        return (
            <h1>Loading data...</h1>

        );

    }
    if (showTab == 1) {

        return (
            <div className="documentContentContainer">

                <div className="paymentFormsNextPaymentContainer">
                <NextPaymentComponent/>
                 </div>

                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                            <Tab className={tabClasses.btnTab0Style} label='Formas de pago.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Documentos.' onClick={secondTab}/>

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
                                                        else if (column.id == "partir_de") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.fecha_pago}
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
                                                        else if (column.id == "monto_bruto") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {"$" + row.monto_pago}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "detalle_pago") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                   <b><AspectRatioIcon fontSize="large" className="documentDownloadRowIcon"/></b>
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
    if (showTab == 2) {
         return (
             <div className="documentContentContainer">


                 <div className="paymentFormsNextPaymentContainer">
                     <NextPaymentComponent />
                 </div>

               
                <div className="documentTabsContainer">

                    <ThemeProvider theme={documentTabsTheme}>
                        <Tabs classes={{ root: tabClasses.documentTabStyle, indicator: tabClasses.tabIndicator }} onChange={handleTabs}

                            value={value} indicatorColor="secondary" textColor="primary"
                            TabIndicatorProps={{
                                style: { background: "#009639", width: "20%", height: "4%", marginLeft: "0%", top: '15px', position: 'absolute' }
                            }}>
                             <Tab className={tabClasses.btnTab0StyleDisabled} label='Formas de Pago' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1Style} label='Documentos.' onClick={secondTab} />

                        </Tabs>
                    </ThemeProvider>


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

                                     allDataSecondaryTab[pageNumber - 1].map((row) => {

                                        return (

                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {retention_columns.map((column) => {


                                                    for (let i = 0; i < allDataSecondaryTab.length; i++) {
                                                        if (column.id == "fecha_documento") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.fecha_pago}
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
                                                                    {row.numero_imp}
                                                                </TableCell>


                                                            );
                                                        }
                                                        else if (column.id == "nota_pedido") {
                                                            return (

                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.numero_imp}
                                                                </TableCell>


                                                            );
                                                        }
                                                        else if (column.id == "importe") {
                                                            return (
                                                                
                                                                    <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                        {"$" + row.monto_pago}
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


}
