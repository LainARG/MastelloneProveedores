import React, { useState, useEffect, Suspense} from 'react';
import '../resources/styles/providerSelectBody.css';
import ProvidersContext from '../contexts/providersContext';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import pagination from '../pagination/pagination';
import { TableBody, TableCell, TableRow, makeStyles, Paper, TableContainer, TableHead, Table } from '@material-ui/core';
import { IoChevronForwardCircleSharp } from "react-icons/io5";


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
    const classes = useStyles();
    const rowsPerPage = 10;


    useEffect(() => {
        if (allProviders == "") {
            ProvidersContext.fetchProviders().then((e) => {
                setAllProviders(e);
            });

        } else if (allData == "" && typeof(allData) == "string") {
            dataMapper(allProviders);
        }

    }, [allProviders, allData]);

    const dataMapper = (allproviders) => {
        let alldata = [];
        let alldatabkp = [];

        for (let i = 0; i < allproviders.length; i++) {

            let objectData = {
                proveedor: null,
                razon_social: null,
                cuit: null,
                domicilio: null,
                localidad: null,
                codigo_postal: null,
                telefono:null

            }
            let objectDataBkp = {
                proveedor: null,
                razon_social: null,
                cuit: null,
                domicilio: null,
                localidad: null,
                codigo_postal: null,
                telefono: null
            }
            
            objectData.proveedor = allproviders[i].codigo_proveedor;
            objectData.razon_social = allproviders[i].razon_social;
            objectData.cuit = allproviders[i].cuit;
            objectData.domicilio= allproviders[i].domicilio;
            objectData.localidad = allproviders[i].localidad;
            objectData.codigo_postal = allproviders[i].codigo_postal;
            objectData.telefono = allproviders[i].telefono;
            console.log(allData[i]);

            objectDataBkp.proveedor = allproviders[i].codigo_proveedor;
            objectDataBkp.razon_social = allproviders[i].razon_social;
            objectDataBkp.cuit = allproviders[i].cuit;
            objectDataBkp.domicilio = allproviders[i].domicilio;
            objectDataBkp.localidad = allproviders[i].localidad;
            objectDataBkp.codigo_postal = allproviders[i].codigo_postal;
            objectData.telefono = allproviders[i].telefono;
            alldata.push(objectData);
            alldatabkp.push(objectDataBkp);
         }

        let pagData = pagination(alldata, alldata.length, rowsPerPage);
        let pagDataBkp = pagination(alldatabkp, alldatabkp.length, rowsPerPage);
        setAllData(pagData);
        setAllDataBkp(pagDataBkp);
        }


    function searchProviderSuggestionsHandler(e) {
        e.preventDefault();
        let userTyping = e.target.value;
        let suggestions = [];
        

        if (userTyping == "" || userTyping.includes(" ")) {
            setAllData(allDataBkp);
        }
        else {
            
            for (let i = 0; i < allDataBkp.length; i++) {
                for (let j = 0; j < allDataBkp[i].length; j++) {
                    let objectData = {
                        proveedor: allDataBkp[i][j].proveedor,
                        razon_social: allDataBkp[i][j].razon_social,
                        cuit: allDataBkp[i][j].cuit,
                        domicilio: allDataBkp[i][j].domicilio,
                        localidad: allDataBkp[i][j].localidad,
                        codigo_postal: allDataBkp[i][j].codigo_postal,
                        telefono: allDataBkp[i][j].telefono
                    }
                    suggestions.push(objectData);
                }
            }

            for (let i = 0; i < suggestions.length; i++) {
               
                if (suggestions[i].cuit != undefined && suggestions[i].cuit.toString().includes(userTyping.toString())) {
                    
                } else {
                    delete suggestions[i];
                    suggestions = suggestions.filter(f => f != undefined);
                    setAllData(pagination(suggestions, suggestions.length, rowsPerPage));
                }

            
            }
           
            
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
                                                        {row.proveedor}
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






