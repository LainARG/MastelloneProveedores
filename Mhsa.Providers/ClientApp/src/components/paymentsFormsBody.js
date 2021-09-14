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
import PaymentsFormsContext from '../contexts/paymentsFormsContext';
import PaymentDetailContext from '../contexts/paymentDetailContext';
import DocumentsContext from '../contexts/documentsContext';
import DocumentTypesContext from '../contexts/documentTypesContext';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import pagination from '../pagination/pagination';
import { makeStyles, Tabs, Tab } from '@material-ui/core';
import { GrDocumentDownload } from "react-icons/gr";




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
        maxHeight: '10px',
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
        backgroundColor: '#eeeeef'
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
    const [allPaymentsForms, setAllPaymentsForms] = useState("");
    const [allPaymentDetails, setAllPaymentDetails] = useState("");
    const [allDocuments, setAllDocuments] = useState("");
    const [allDocumentTypes, setAllDocumentTypes] = useState("");
    const [allDataPrimaryTab, setAllDataPrimaryTab] = useState("");
    const [allDataSecondaryTab, setAllDataSecondaryTab] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [primaryPageQuantity, setPrimaryPageQuantity] = useState(10);
    const [secondaryPageQuantity, setSecondaryPageQuantity] = useState(10);
    const [value, setValue] = useState(0);
    const [showTab, setShowTab] = useState(1);
    const [openFilterMenu, setOpenFilterMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const rowsPerPage = 4;





    useEffect(() => {

        if (allPaymentsForms == "") {
            PaymentsFormsContext.fetchPaymentsForms().then((e) => { setAllPaymentsForms(e) });
        }
        else if (allPaymentDetails == "") {
            PaymentDetailContext.fetchPaymentDetail().then((e) => { setAllPaymentDetails(e) });
        }
        else if (allDocuments == "") {
            DocumentsContext.fetchDocuments().then((e) => { setAllDocuments(e) });
        }
        else if (allDocumentTypes == ""){
            DocumentTypesContext.fetchDocumentTypes().then((e) => { setAllDocumentTypes(e) });
        }
        else {
            dataMapper();
        }

    }, [allPaymentsForms, allPaymentDetails, allDocuments, allDocumentTypes]);

    const columns = [
        {
            id: 'fecha_emision',
            label: 'Fecha emision',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'fecha_pago',
            label: 'Fecha pago',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'tipo',
            label: 'tipo',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'numero',
            label: 'numero',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'importe',
            label: 'importe',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'comprobante',
            label: 'comprobante',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
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

    const dataMapper = () => {
        let alldataPTab = [];
        let alldataSTab = [];
        let paymentId = JSON.parse(localStorage.getItem("currentDetailPayment")).id_pago;
        let detailPayments;


        alldataPTab = allPaymentsForms.filter(payment => payment.id_pago == paymentId);
        detailPayments = allPaymentDetails.filter(payment => payment.id_pago == paymentId);

        for (let i = 0; i < detailPayments.length; i++){
            let currentObject = detailPayments[i];
            let document = allDocuments.filter(doc => doc.id_documento == currentObject.id_documento)[0];
            if (document != undefined || document != null || document != "") {
                alldataSTab.push(document);
            }

        }
        
        
            
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
                            <Tab className={tabClasses.btnTab0Style} label='Formas de pago.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Documentos.' onClick={secondTab} />

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
    if (showTab == 1 && allDataPrimaryTab != "" && allDataPrimaryTab != null && allDataPrimaryTab != undefined) {

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
                            <Tab className={tabClasses.btnTab0Style} label='Formas de pago.' onClick={firstTab}></Tab>
                            <Tab className={tabClasses.btnTab1StyleDisabled} label='Documentos.' onClick={secondTab} />

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
                                                        else if (column.id == "comprobante") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align} className={classes.rowsTable}>
                                                                    <b><GrDocumentDownload fontSize="large" className="documentDownloadRowIcon" /></b>
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
    if (showTab == 2 && allDataSecondaryTab != null && allDataSecondaryTab != "" && allDataSecondaryTab != undefined) {

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
                                        let type = allDocumentTypes.filter(doc => doc.id_tipo_documento == row.id_tipo_documento)[0].descripcion;
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
                                                                    {type}
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
                            <Pagination count={secondaryPageQuantity} onChange={paginationHandler} />
                        </div>
                    </ThemeProvider>

                </Paper>
            </div>
        );
    }
    if (showTab == 2 && allDataSecondaryTab == "" || showTab == 2 && allDataSecondaryTab == null || showTab == 2 && allDataSecondaryTab == undefined){

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
