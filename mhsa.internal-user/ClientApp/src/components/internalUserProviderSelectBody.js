import React, { useState, useEffect, Suspense} from 'react';
import '../resources/styles/providerSelectBody.css';
import ProvidersContext from '../contexts/providersContext';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import pagination from '../pagination/pagination';
import Pagination from '@material-ui/lab/Pagination';
import { TableBody, TableCell, TableRow, makeStyles, Paper, TableContainer, TableHead, Table } from '@material-ui/core';
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export default function InternalUserProviderSelectBody() {

    const files = [
        {
            id: 'Proveedor',
            label: 'Proveedor',
            width: 75,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Razon_social',
            label: 'Razon social',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Cuit',
            label: 'CUIT',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'GoProvider',
            label: ' ',
            minWidth: 150,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        }
    ];
    const columns = [
        {
            id: 'Proveedor',
            label: 'Proveedor',
            width: 75,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Razon_social',
            label: 'Razon social',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Cuit',
            label: 'CUIT',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'GoProvider',
            label: ' ',
            minWidth: 150,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        }
    ];

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

    const useStyles = makeStyles({
        cellsTable: {
            fontWeight: 'bold',
            color: '#000000',
            backgroundColor: 'white',
            opacity: '0.6',
           

        },
        rowsTable: {
            "&:hover": {
                backgroundColor: 'lavender',
            }
        },
        container: {
            maxHeight: 440,
        },
        headerTable: {
            fontWeight: 'bold',
            color: '#797a7a',
            backgroundColor: 'white',
            opacity: '1',
            fontSize: '16px'
        },
        root: {
            width: '100%'
        }
    });

    const [provider, setProvider] = useState("");
    const [allProviders, setAllProviders] = useState("");
    const [allData, setAllData] = useState("");
    const [allDataBkp, setAllDataBkp] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pageQuantity, setPageQuantity] = useState(0);
    const classes = useStyles();
    const rowsPerPage = 10;


    useEffect(() => {
        let prv = window.localStorage.getItem("currentProvider") || "Proveedor no seleccionado";
        if (prv != "Proveedor no seleccionado") {
            window.localStorage.removeItem("currentProvider");
        }
        if (allProviders == "") {
            ProvidersContext.fetchProviders().then((e) => {setAllProviders(e)});
        }
        else {
            dataMapper();
        }

    }, [allProviders]);


     


    const dataMapper = (allproviders) => {
        let alldata = [];
        let alldatabkp = [];

        alldata = allProviders.filter(provider => provider.id_proveedor > 0);
        alldatabkp = allProviders.filter(provider => provider.id_proveedor > 0);

        let pagData = pagination(alldata, alldata.length, rowsPerPage);
        let pagDataBkp = pagination(alldatabkp, alldatabkp.length, rowsPerPage);
        setPageQuantity(pagData.length);
        setAllData(pagData);
        setAllDataBkp(pagDataBkp);
        }





    const paginationHandler = (e) => {
        if (e.target.ariaLabel != undefined) {
            let label = e.target.ariaLabel;
            let nPage = label.split(" ");
            let pageNum = parseInt(nPage[nPage.length - 1]);
            setPageNumber(pageNum);
        }

    }

    function searchProviderSuggestionsHandler(e) {
        e.preventDefault();
        let userTyping = e.target.value;
        let suggestions = [];
        

        if (userTyping == "") {
            setAllData(allDataBkp);
        }
        else {

            suggestions = allProviders.filter(provider => provider.cuit.toString().includes(userTyping.toString()));
            setAllData(pagination(suggestions, suggestions.length, rowsPerPage));
            setPageQuantity(allData.length);
        }
       
        
    }

    function ProviderSelected(row) {
        window.localStorage.removeItem("currentProvider");
        window.localStorage.setItem("currentProvider", JSON.stringify(row));
        window.location = "/internalUser/homePortalProvider";
        console.log(row);
    }

  


   
    if (allData[0] != undefined && allData[0] != "" && allData[0] != null) {
        
        return (

            <div className="providerSelectContainer">

                <h3 className="providerSelectLegend">Seleccionar proveedor.</h3>

                <div className="internalUserProviderSelectSearchBarContainer">

                    <input className="internalUserProviderSelectSearchBar" type="text" placeholder="Buscar proveedor" className="documentSearchBar1" onChange={searchProviderSuggestionsHandler} />

                </div>

                <div className="internalUserProviderSelectSearchIconContainer">
                    <SearchRoundedIcon className="internalUserProviderSelectSearchIcon" fontSize="large" />
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
                <TableBody id="documentTable">
                    {

                        allData[pageNumber - 1].map((row, index) => {

                            return (

                                <TableRow hover role="checkbox" tabIndex={-1} key={index} className={classes.rowsTable}>
                                    {files.map((column) => {


                                        for (let i = 0; i < allData.length; i++) {
                                            if (column.id == "Proveedor") {
                                                return (
                                                    <TableCell key={column.id} align={column.align} className={classes.cellTable}>
                                                        {row.codigo_proveedor}
                                                    </TableCell>
                                                );
                                            }
                                            else if (column.id == "Razon_social") {
                                                return (
                                                    <TableCell key={column.id} align={column.align} className={classes.cellTable}>
                                                        {row.razon_social}
                                                    </TableCell>
                                                );
                                            }
                                            else if (column.id == "Cuit") {
                                                return (
                                                    <TableCell key={column.id} align={column.align} className={classes.cellTable}>
                                                        {row.cuit}
                                                    </TableCell>
                                                );
                                            }
                                            else if (column.id == "GoProvider") {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <IoChevronForwardCircleSharp className="iconGoToProviderSelect" onClick={ ()=>ProviderSelected(row)} />
                                                        
                                                    </TableCell>
                                                );
                                            }
                                            
                                        }

                                    })

                                    }
                                </TableRow>
                            );
                        }
                        )}



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

    } else {
       
        return (
            <div className="providerSelectContainer">

                <h3 className="providerSelectLegend">Seleccionar proveedor.</h3>

                <div className="internalUserProviderSelectSearchBarContainer">

                    <input className="internalUserProviderSelectSearchBar" type="text" placeholder="Buscar proveedor" className="documentSearchBar1" onChange={searchProviderSuggestionsHandler} />

                </div>

                <div className="internalUserProviderSelectSearchIconContainer">
                    <SearchRoundedIcon className="internalUserProviderSelectSearchIcon" fontSize="large" />
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
                        </Table>
                    </TableContainer>

                </Paper>



            </div>);
    }
    
}






