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

export default function InternalUserProviderSelectBody() {
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
      align: "left",
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

  const [allProviders, setAllProviders] = useState([]);
  const [allData, setAllData] = useState([]);
  const [allDataBkp, setAllDataBkp] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();
  const rowsPerPage = 10;

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
      <Box mt={2}>
        <Box p={2}>
          <Typography className={classes.bold} variant="h4">
            Estadísticas de uso por usuarios.
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end" mb={2} mr={3}>
        <Box display="flex" maxWidth="25%">
          <input
            className="internalUserProviderSelectSearchBar documentSearchBar1"
            type="text"
            placeholder="Buscar proveedor"
            onChange={searchProviderSuggestionsHandler}
          />
          <div className="internalUserProviderSelectSearchIconContainer">
            <SearchRoundedIcon
              className="internalUserProviderSelectSearchIcon"
              fontSize="large"
            />
          </div>
        </Box>
      </Box>


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
                              {row.mail}
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
