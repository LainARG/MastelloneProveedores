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
import DigitalDocumentsContext from '../contexts/digitalDocumentsContext ';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import pagination from '../pagination/pagination';
import TuneIcon from '@material-ui/icons/Tune';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles, Tabs, Tab } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';


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
        color: '#87847b',
        align:'left'
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

    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#009639'
        }
    }

});



export default function Test() {
    const classes = useStyles();
    const tabClasses = useTabStyles();
    const [allDocs, setAllDocs] = useState("");
    const [allPays, setAllPays] = useState("");
    const [allData, setAllData] = useState("");
    const [allDigDocs, setDigDocs] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pageQuantity, setPageQuantity] = useState(10);
    const [contextCtrl, setContextCtrl] = useState(0);
    const [value, setValue] = useState(0);
    const [showTab, setShowTab] = useState(1);
    const rowsPerPage = 8;
    
    
    const setContext = () => {
        
            setAllDocs(DocumentsContext.allDocuments);
            setAllPays(PaymentsContext.allPayments);
            setDigDocs(DigitalDocumentsContext.allDigitalDocuments);
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
                    digDoc_fecha_carga: null,
                    digDoc_estado: null,
                    digDoc_usu_carga: null,
                    digDoc_descarga: null
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

                if (allDocs[i].id_documento == allDigDocs[j].id_documento && i < allDigDocs.length && j < allDigDocs.length) {
                    objectData.digDoc_fecha_carga = allDigDocs[j].fecha_de_carga;
                    objectData.digDoc_estado = allDigDocs[j].estado;
                    objectData.digDoc_usu_carga = allDigDocs[j].id_usuario_carga;
                    alldata.push(objectData);
                }

            }
        }
        console.log(alldata);
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



    const handleTabs = (e, val) => {
        setValue(val);
        switch (val) {
            case 0:
                console.log("tab 1");
                break;
            case 1:
                console.log("tab 2");
                break;
        }
    }

    const firstTab = () => {
        setShowTab(1);
    }

    const secondTab = () => {
        setShowTab(2);
    }
       




    if (allData == undefined || allData == null || allData == "") {

        
        return (
            <h1>Loading data...</h1>

        );

    }
    if (showTab == 1) {

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
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Documentos Electronicos.' onClick={secondTab}/>

                        </Tabs>
                    </ThemeProvider>


                </div>






                <Paper className={classes.root}>

                    <div className="documentIconContainer">
                        <TuneIcon fontSize="large" />
                    </div>

                    <div className="documentSearchBarContainer">
                        <input placeholder="Buscar por num. de documento" className="documentSearchBar" />
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

                                    allData[pageNumber - 1].map((row) => {

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
    if (showTab == 2) {
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
                     <div className="digDocumentIconPoint">
                         <ControlPointIcon fontSize="large" /> <b>Cargar</b>
                     </div>
                     <div className="digDocumentIconSettings">
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
                                {

                                    allData[pageNumber - 1].map((row) => {

                                        return (

                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {electronics_columns.map((column) => {


                                                    for (let i = 0; i < allData.length; i++) {
                                                        if (column.id == "Fecha_carga") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.digDoc_fecha_carga}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "Estado") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.digDoc_estado}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "Cargado_por") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    {row.digDoc_usu_carga}
                                                                </TableCell>
                                                            );
                                                        }
                                                        else if (column.id == "Descarga") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    <div className="downloadIconContainer">
                                                                        <GetAppIcon fontSize="large" />
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
                            <Pagination count={pageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );
    }


}
