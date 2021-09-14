import React, { useState, useEffect } from "react";
import image from "../resources/images/logo.svg";
import "../resources/styles/navBar.css";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Tabs,
  Tab,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";
import image1 from "../resources/images/lain.jpg";
import Avatar from "@material-ui/core/Avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  style: {
    backgroundColor: "white",
    cursor: "pointer",
  },
  tabStyle: {
    display: "block",
    width: "100%",
    "& .indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > span": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: "orange"
      }
    }
  },
  logoStyle: {
    display: "inlineBlock",
    height: "10rem",
    mouse: "pointer",
  },
  btn0Style: {
    display: "inline",
    backgroundColor: "transparent",
    textTransform: "capitalize",
    cursor: "pointer",
    fontWeight: "900",
    textTransform: "none",
    fontSize: 16,
    marginLeft: "1%",
    marginTop: "1%",
    width: "auto",
    minWidth: "auto",
    color: "#999",
  },
  dropdownStyle: {
    "&:hover,&:focus,&:active": {
      backgroundColor: "transparent",
      color: "#8c8777",
    },
    "&:enabled": {
      backgroundColor: "transparent",
      color: "#8c8777",
    },
    display: "inlineBlock",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontWeight: "900",
    fontFamily: "arial",
    textTransform: "capitalize",
    fontSize: 17,
    widht: "100px",
    border: "none",
    color: "#8c8777",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  userMenuItem: {
    display: "flex",
    width: "200px",
    minWidth: "200px",
    justifyContent: "space-between",
  },
  menuItemStyle: {
    display: "block",
    color: "#000000",
    minWidth: "125vm",
    width: "125vm",
    fontSize: "14px",
    "&:hover": {
      color: "#000000",
      textDecoration: "none",
    },
  },
  menuItemStyleActions: {
    display: "block",
    color: "#000000",
    fontWeight: "bold",
    minWidth: "125vm",
    width: "125vm",
    fontSize: "13px",
    "&:hover": {
      color: "#000000",
      textDecoration: "none",
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#009639",
    },
  },
});

const NavBarBackoffice = (props) => {
  const [dropdownValue, setDropdownValue] = useState(false);

  const [menuState, setMenuState] = useState(false);

  const [anchorEl, setAnchorEl] = useState(false);

  const [value, setValue] = useState(0);

  const { index } = props;

  useEffect(() => {});

  const navBarHandleUserMenu = (e) => {
    setMenuState(!menuState);
  };

  const navBarCloseUserMenu = (e) => {
    setMenuState(false);
  };

  const navBarCloseUserMenuSession = (e) => {
    setMenuState(false);
    window.localStorage.removeItem("tknUsr");
    window.location = "/auth";
  };

  const DropdownAction = () => {
    setDropdownValue(!dropdownValue);
  };

  const history = useHistory();

  const handleTabs = (e, val) => {
    setValue(val);
    switch (val) {
      case 0:
        history.push('/backoffice/users')
        break;
      case 1:
        history.push('/backoffice/users')
        break;
      case 2:
        history.push('/backoffice/statistics')
        break;
      case 3:
        history.push('/backoffice/areas')
        break;
      case 4:
        history.push('/backoffice/communications')
        break;
      default:
        break;
    }
  };

  const classes = useStyles();

  return (
    <div className="navBarContainer">
      <div>
        <ThemeProvider theme={theme}>
          <AppBar
            elevation={0}
            position="fixed"
            color="primary"
            className={classes.style}
          >
            <Toolbar>
              <img className={classes.logoStyle} src={image} />

              <div>
                <Dropdown
                  isOpen={dropdownValue}
                  toggle={DropdownAction}
                >
                  <DropdownToggle caret className={classes.dropdownStyle}>
                    Portal - BackOffice
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Portal - BackOffice</DropdownItem>
                    <DropdownItem>Portal - Usuario Interno</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              <Tabs
                classes={{ root: classes.tabStyle }}
                onChange={handleTabs}
                value={index}
                indicatorColor="secondary"
                textColor="primary"
                TabIndicatorProps={{
                  style: {
                    background: "#009639",
                    width: "2%",
                    height: "6%",
                  },
                  children: <span />
                }}
              >
                <Tab
                  className={classes.btn0Style}
                  label="Inicio"
                />
                <Tab
                  className={classes.btn0Style}
                  label="Usuarios"
                />
                <Tab
                  className={classes.btn0Style}
                  label="Estadísticas"
                />
                <Tab
                  className={classes.btn0Style}
                  label="Áreas"
                />
                <Tab
                  className={classes.btn0Style}
                  label="Comunicaciones"
                />
                <Tab
                  className={classes.btn0Style}
                  label="Ajustes"
                />
              </Tabs>
            </Toolbar>
          </AppBar>
        </ThemeProvider>

        <div className="navBarUserAvatarComponentContainer">
          <div
            className="navBarUserAvatarComponentUserDataContainer"
            onClick={navBarHandleUserMenu}
          >
            <Avatar alt="no image" src={image1} />

            <span className="navBarUserAvatarComponentUserName">
              {localStorage.getItem("iUserName")}
            </span>
          </div>

          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={menuState}
            onClose={navBarCloseUserMenu}
            className="navBarUserAvatarComponentUserMenu1"
          >
            <MenuItem
              onClick={navBarCloseUserMenu}
              className={classes.menuItemStyle}
            >
              Novedades de la sección <b>"Pagos"</b>
            </MenuItem>
            <MenuItem
              onClick={navBarCloseUserMenu}
              className={classes.menuItemStyle}
            >
              Novedades de la sección <b>"Avisos"</b>
            </MenuItem>
            <MenuItem
              onClick={navBarCloseUserMenu}
              className={classes.menuItemStyleActions}
            >
              <Link
                to="/login/accountkeyformat"
                className={classes.menuItemStyleActions}
              >
                Cambio de clave
              </Link>
            </MenuItem>
            <MenuItem
              onClick={navBarCloseUserMenuSession}
              className={classes.menuItemStyleActions}
            >
              Cerrar sesión
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default NavBarBackoffice;
