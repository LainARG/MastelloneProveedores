import React, { useState, useEffect } from "react";
import "../resources/styles/providerSelectBody.css";
import ProvidersContext from "../contexts/providersContext";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import pagination from "../pagination/pagination";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TuneIcon from '@material-ui/icons/Tune';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {
  TableBody,
  TableCell,
  TableRow,
  makeStyles,
  TableContainer,
  TableHead,
  Table,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import { useHistory } from "react-router";

export default function BackofficeNoticesManagement() {
  const history = useHistory();
  const columns = [
    {
      id: "periodo_vigencia",
      label: "Periodo de vigencia",
      width: 75,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "area",
      label: "Área",
      width: 75,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "destinatario",
      label: "Destinatario",
      minWidth: 150,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "titulo",
      label: "Título",
      minWidth: 150,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "acciones",
      label: "Acciones",
      minWidth: 150,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  const notices = [
    [
      {
        periodoVigencia:'15/07/2021 - 16/08/2021',
        area: 'Sustentabilidad',
        destinatario:'Todos los proveedores',
        titulo:'Prueba 1',
      },
      {
        periodoVigencia:'15/07/2021 - 16/08/2021',
        destinatario:'Todos los proveedores',
        area: 'Sustentabilidad',
        titulo:'Prueba 2',
      },
      {
        periodoVigencia:'15/07/2021 - 16/08/2021',
        destinatario:'Todos los proveedores',
        area: 'Sustentabilidad',
        titulo:'Prueba 3',
      },
      {
        periodoVigencia:'15/07/2021 - 16/08/2021',
        destinatario:'PURALACTEA S.A., NESTLE ARGENTINA S.A.',
        area: 'Sustentabilidad',
        titulo:'Prueba 4',
      },
    ]
  ]

  const noticesClone = [
    [
      {
        periodoVigencia:'15/07/2021 - 16/08/2021',
        area: 'Institucional',
        destinatario:'Todos los proveedores',
        titulo:'Prueba 1',
      },
      {
        periodoVigencia:'15/07/2021 - 16/08/2021',
        destinatario:'Todos los proveedores',
        area: 'Financiera',
        titulo:'Prueba 2',
      },
      {
        periodoVigencia:'15/07/2021 - 16/08/2021',
        destinatario:'Todos los proveedores',
        area: 'Financiera',
        titulo:'Prueba 3',
      },
    ]
  ]
  

  const useStyles = makeStyles({
    cellTable: {
      fontWeight: "bold",
      color: "#797a7a",
      fontSize: "1.1rem",
    },
    iconButton: {
      color: "#797a7a",
      "&:hover": {
        cursor: "pointer",
      },
    },
    rowsTable: {
      "&:hover": {
        backgroundColor: "lavender",
      },
    },
    container: {
      maxHeight: 440,
    },
    headerTable: {
      fontWeight: "bold",
      color: "#797a7a",
      fontSize: "1.1rem",
    },
    root: {
      width: "100%",
    },
    roundedButtonSelected: {
      minWidth: "200px",
      borderRadius: "30px",
      textTransform: "none",
      marginRight: "15px",
    },
    roundedButton: {
      border: "0px",
      borderRadius: "30px",
      minWidth: "200px",
      textTransform: "none",
      marginRight: "15px",
    },
    bold: {
      fontWeight: "bold",
    }
  });

  const [allProviders, setAllProviders] = useState([]);
  const [allData, setAllData] = useState(notices);
  const [allData2, setAllData2] = useState(noticesClone);
  const [allDataBkp, setAllDataBkp] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();
  const rowsPerPage = 10;

  useEffect(() => {
    // ProvidersContext.fetchProviders().then((e) => {
    //   setAllProviders(e);
    // });
  }, []);

  useEffect(() => {
    // dataMapper(allProviders);
  }, [allProviders]);

  const dataMapper = (allproviders) => {
    let alldata = [];
    let alldatabkp = [];

    // const associatedProvider = allProviders.find(el => el.idProveedor)

    allproviders.map((provider) => {
      let objectData = {
        razon_social: provider.razon_social,
        cuit: provider.cuit,
      };

      if (objectData.cuit) {
        alldata.push(objectData);
        alldatabkp.push({ ...objectData });
      }
    });

    let pagData = pagination(alldata, alldata.length, rowsPerPage);
    let pagDataBkp = pagination(alldatabkp, alldatabkp.length, rowsPerPage);
    setAllData(pagData);
    setAllDataBkp(pagDataBkp);
  };

  function searchProviderSuggestionsHandler(e) {
    e.preventDefault();
    let userTyping = e.target.value;
    let suggestions = [];

    if (userTyping === "" || userTyping.includes(" ")) {
      setAllData(allDataBkp);
    } else {
      for (let i = 0; i < allDataBkp.length; i++) {
        for (let j = 0; j < allDataBkp[i].length; j++) {
          suggestions.push(allDataBkp[i][j]);
        }
      }

      for (let i = 0; i < suggestions.length; i++) {
        if (
          suggestions[i].mail !== undefined &&
          suggestions[i].mail.toString().includes(userTyping.toString())
        ) {
        } else {
          delete suggestions[i];
          suggestions = suggestions.filter((f) => f !== undefined);
          setAllData(pagination(suggestions, suggestions.length, rowsPerPage));
        }
      }
    }
  }

  function ProviderSelected(row) {
    window.localStorage.removeItem("currentProvider");
    window.localStorage.setItem("currentProvider", JSON.stringify(row));
    history.push("/backoffice/providerUser");
    console.log(row);
  }
  return (
    <div>
      <Box display="flex" my={4} justifyContent="space-between">
        <Box display="flex">
          <Box style={{cursor:"pointer"}} onClick={() => 1} display="flex" alignItems="center" mr={2}>
            <Box mr={1}>
              <AddCircleOutlineIcon fontSize="large"/>
            </Box>
            <Typography className="bold" variant="body1">Nuevo aviso</Typography>
          </Box>
          <Box style={{cursor:"pointer"}} onClick={() => 1} display="flex" alignItems="center">
            <Box mr={1}>
              <LibraryBooksIcon fontSize="large"/>
            </Box>
            <Typography className="bold" variant="body1">Borradores</Typography>
          </Box>
        </Box>
        <Box display="flex" maxWidth="35%">
          <TuneIcon fontSize="large"/>
          <Box mx={1}>
            <input
              className="internalUserProviderSelectSearchBar documentSearchBar1"
              type="text"
              placeholder="Buscar aviso"
              onChange={searchProviderSuggestionsHandler}
            />
          </Box>
          <div className="internalUserProviderSelectSearchIconContainer">
            <SearchRoundedIcon
              className="internalUserProviderSelectSearchIcon"
              fontSize="large"
            />
          </div>
        </Box>
      </Box>

      <Typography className={classes.bold} variant="h5">Últimos avisos destacados.</Typography>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={classes.headerTable}
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
            {allData.length > 0 &&
              allData[pageNumber - 1].map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    className={classes.rowsTable}
                  >
                    {columns.map((column) => {
                      for (let i = 0; i < allData.length; i++) {
                        if (column.id === "periodo_vigencia") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.periodoVigencia}
                            </TableCell>
                          );
                        } else if (column.id === "area") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.area}
                            </TableCell>
                          );
                        } else if (column.id === "destinatario") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.destinatario}
                            </TableCell>
                          );
                        }else if (column.id === "titulo") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.titulo}
                            </TableCell>
                          );
                        } else if (column.id === "acciones") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {/* <LaunchIcon
                                className={classes.iconButton}
                                onClick={() => ProviderSelected(row)}
                              /> */}
                              <VisibilityIcon
                                className={classes.iconButton}
                              />
                              <CommentIcon
                                className={classes.iconButton}
                              />
                              <OpenInNewIcon
                                className={classes.iconButton}
                              />
                              <EditIcon
                                className={classes.iconButton}
                              />
                              <DeleteOutlineIcon
                                className={classes.iconButton}
                              />
                            </TableCell>
                          );
                        }
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={4}>
      <Typography className={classes.bold} variant="h5">Últimos avisos sin destacar.</Typography>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={classes.headerTable}
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
            {allData2.length > 0 &&
              allData2[pageNumber - 1].map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    className={classes.rowsTable}
                  >
                    {columns.map((column) => {
                      for (let i = 0; i < allData2.length; i++) {
                        if (column.id === "periodo_vigencia") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.periodoVigencia}
                            </TableCell>
                          );
                        } else if (column.id === "area") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.area}
                            </TableCell>
                          );
                        } else if (column.id === "destinatario") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.destinatario}
                            </TableCell>
                          );
                        }else if (column.id === "titulo") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.titulo}
                            </TableCell>
                          );
                        } else if (column.id === "acciones") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {/* <LaunchIcon
                                className={classes.iconButton}
                                onClick={() => ProviderSelected(row)}
                              /> */}
                              <VisibilityIcon
                                className={classes.iconButton}
                              />
                              <CommentIcon
                                className={classes.iconButton}
                              />
                              <OpenInNewIcon
                                className={classes.iconButton}
                              />
                              <EditIcon
                                className={classes.iconButton}
                              />
                              <DeleteOutlineIcon
                                className={classes.iconButton}
                              />
                            </TableCell>
                          );
                        }
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </div>
  );
}
