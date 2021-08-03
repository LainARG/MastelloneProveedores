import React, { useState, useEffect } from "react";
import "../resources/styles/providerSelectBody.css";
import ProvidersContext from "../contexts/providersContext";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import pagination from "../pagination/pagination";
import {
  TableBody,
  TableCell,
  TableRow,
  makeStyles,
  TableContainer,
  TableHead,
  Table,
  Tooltip,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import { useHistory } from "react-router";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function BackofficeProviderStatistics() {
  const history = useHistory();
  const columns = [
    {
      id: "razon_social",
      label: "Razon Social",
      width: 75,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "cuit",
      label: "CUIT",
      minWidth: 150,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "usuarios_asociados",
      label: "Cantidad de usuarios asociados",
      minWidth: 150,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "GoProvider",
      label: "Detalle",
      minWidth: 150,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

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

  const monthData = [
    {
      "name": "Enero",
      "pv": 24
    },
    {
      "name": "Febrero",
      "pv": 13
    },
    {
      "name": "Marzo",
      "pv": 98
    },
    {
      "name": "Abril",
      "pv": 39
    },
    {
      "name": "Mayo",
      "pv": 48
    },
    {
      "name": "Junio",
      "pv": 38
    },
    {
      "name": "Julio",
      "pv": 43
    },
    {
      "name": "Agosto",
      "pv": 88
    },
    {
      "name": "Septiembre",
      "pv": 43
    },
    {
      "name": "Octubre",
      "pv": 15
    },
    {
      "name": "Noviembre",
      "pv": 22
    },
    {
      "name": "Diciembre",
      "pv": 63
    }
  ]
  const weekData = [
    {
      "name": "Lunes",
      "pv": 24
    },
    {
      "name": "Martes",
      "pv": 13
    },
    {
      "name": "Miercoles",
      "pv": 98
    },
    {
      "name": "Jueves",
      "pv": 39
    },
    {
      "name": "Viernes",
      "pv": 48
    },
    {
      "name": "Sabado",
      "pv": 38
    },
    {
      "name": "Domingo",
      "pv": 43
    },
  ]
  const dayData = [
    {
      "name": "1-2 AM",
      "pv": 24
    },
    {
      "name": "2-3 AM",
      "pv": 13
    },
    {
      "name": "3-4 AM",
      "pv": 98
    },
    {
      "name": "4-5 AM",
      "pv": 39
    },
    {
      "name": "5-6 AM",
      "pv": 48
    },
    {
      "name": "6-7 AM",
      "pv": 38
    },
    {
      "name": "7-8 AM",
      "pv": 43
    },
    {
      "name": "8-9 AM",
      "pv": 88
    },
    {
      "name": "9-10 AM",
      "pv": 43
    },
    {
      "name": "10-11 AM",
      "pv": 15
    },
    {
      "name": "11-12 AM",
      "pv": 22
    },
    {
      "name": "12-1 PM",
      "pv": 63
    },
    {
      "name": "1-2 PM",
      "pv": 63
    },
    {
      "name": "2-3 PM",
      "pv": 63
    },
    {
      "name": "3-4 PM",
      "pv": 63
    },
    {
      "name": "4-5 PM",
      "pv": 63
    },
    {
      "name": "5-6 PM",
      "pv": 63
    },
    {
      "name": "6-7 PM",
      "pv": 63
    },
    {
      "name": "7-8 PM",
      "pv": 63
    },
    {
      "name": "8-9 PM",
      "pv": 63
    },
    {
      "name": "9-10 PM",
      "pv": 63
    },
    {
      "name": "10-11 PM",
      "pv": 63
    },
    {
      "name": "11-12 PM",
      "pv": 63
    },
    {
      "name": "12-1 AM",
      "pv": 63
    }
  ]
  const [allProviders, setAllProviders] = useState([]);
  const [allData, setAllData] = useState([]);
  const [allDataBkp, setAllDataBkp] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(monthData);
  const [graphIndex, setGraphIndex] = useState(0);
  const classes = useStyles();
  const rowsPerPage = 10;

  const setMonth = () => {
    setData(monthData)
    setGraphIndex(0)
  }

  const setWeek = () => {
    setData(weekData)
    setGraphIndex(1)
  }

  const setDay = () => {
    setData(dayData)
    setGraphIndex(2)
  }

  useEffect(() => {
    ProvidersContext.fetchProviders().then((e) => {
      setAllProviders(e);
    });
  }, []);

  useEffect(() => {
    dataMapper(allProviders);
  }, [allProviders]);

  const dataMapper = (allproviders) => {
    let alldata = [];
    let alldatabkp = [];

    // const associatedProvider = allProviders.find(el => el.idProveedor)

    allproviders.map((provider) => {
      let objectData = {
        razon_social: provider.razon_social,
        cuit: provider.cuit,
        userCount: provider.usersAssignments ? provider.usersAssignments.length : 0,
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
  }

  return (
    <div>
      <Box mt={2}>
        <Box p={2}>
          <Typography className={classes.bold} variant="h4">
            Estadísticas de uso por proveedores.
          </Typography>
        </Box>
        <Box px={2}>
          <Typography className="bold" variant="h6">
            Cant. de proveedores
          </Typography>
        </Box>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data} barGap={12} maxBarSize={60}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tickLine={false}/>
            <YAxis axisLine={false} tickLine={false}/>
            <Tooltip />
            {/* <Legend /> */}
            <defs>
              <linearGradient
                id="colorUv"
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#009639" />
                <stop offset="1" stopColor="rgba(0,150,57,0.1)" />
              </linearGradient>
            </defs>
            <Bar radius={[15, 15, 0, 0]} dataKey="pv" fill="url(#colorUv)" />
          </BarChart>
        </ResponsiveContainer>
        <Box display="flex">
          <Button onClick={setMonth} className={graphIndex === 0 ? classes.roundedButtonSelected : classes.roundedButton} color={graphIndex === 0 ? 'primary' : ''} variant="outlined">
            Mensual
          </Button>
          <Button onClick={setWeek} className={graphIndex === 1 ? classes.roundedButtonSelected : classes.roundedButton} color={graphIndex === 1 ? 'primary' : ''} variant="outlined">
            Semanal
          </Button>
          <Button onClick={setDay} className={graphIndex === 2 ? classes.roundedButtonSelected : classes.roundedButton} color={graphIndex === 2 ? 'primary' : ''} variant="outlined">
            Diario
          </Button>
        </Box>
        <Box display="flex" mt={2}>
          <Box display="flex" mr={6}>
            <Typography variant="h6" style={{fontWeight:"bold"}}>
              Total de Proveedores:
            </Typography>
            <Typography variant="h6">
              {allProviders.length}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="h6" style={{fontWeight:"bold"}}>
              Proveedores con datos:
            </Typography>
            <Typography variant="h6">
              {allProviders.length}
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className="internalUserProviderSelectSearchBarContainer">
        <input
          className="internalUserProviderSelectSearchBar documentSearchBar1"
          type="text"
          placeholder="Buscar proveedor"
          onChange={searchProviderSuggestionsHandler}
        />
      </div>

      <div className="internalUserProviderSelectSearchIconContainer">
        <SearchRoundedIcon
          className="internalUserProviderSelectSearchIcon"
          fontSize="large"
        />
      </div>

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
                        if (column.id === "razon_social") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.razon_social}
                            </TableCell>
                          );
                        } else if (column.id === "cuit") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.cuit}
                            </TableCell>
                          );
                        } else if (column.id === "usuarios_asociados") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={classes.cellTable}
                            >
                              {row.userCount}
                            </TableCell>
                          );
                        } else if (column.id === "GoProvider") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <LaunchIcon
                                className={classes.iconButton}
                                onClick={() => ProviderSelected(row)}
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
    </div>
  );
}
