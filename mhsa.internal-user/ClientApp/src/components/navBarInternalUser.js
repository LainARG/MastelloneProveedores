import React, { useState, useEffect } from 'react';
import image from '../resources/images/logo.png';
import '../resources/styles/navBar.css';
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Tabs, Tab } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';
import image1 from '../resources/images/lain.jpg';
import Avatar from '@material-ui/core/Avatar';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const useStyles = makeStyles({

    style: {
        backgroundColor: 'white',
        cursor: 'pointer'
    },
    tabStyle: {
        display: 'block',
        width: '100%',
        marginLeft: '14%'
    },
    logoStyle: {
        display: 'inlineBlock',
        height: '100px',
        minHeight: '100px',
        marginLeft: '-15%'
    },
    btn0Style: {
        display: 'inline',
        backgroundColor: 'transparent',
        textTransform: 'capitalize',
        cursor: 'pointer',
        fontWeight: '900',
        textTransform: 'none',
        fontSize: 16,
        marginLeft: '1%',
        marginTop: "1%",
        width: 'auto',
        minWidth: 'auto',
        color: '#d1d1d1',
        '&.indicator': {
            widht: '0.5vm'
        }
    },
    dropdownStyle: {
        '&:hover,&:focus,&:active': {
            backgroundColor: 'transparent',
            color: '#8c8777'
        },
        '&:enabled': {
            backgroundColor: 'transparent',
            color: '#8c8777'
        },
        display: 'inlineBlock',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: '900',
        fontFamily: 'arial',
        textTransform: 'capitalize',
        fontSize: 17,
        widht: '100px',
        marginLeft: '70%',
        marginTop: '-25%',
        border: 'none',
        color: '#8c8777',
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
    userMenuItem: {
        display: 'flex',
        width: '200px',
        minWidth: '200px',
        justifyContent: "space-between"
    },
    menuItemStyle: {
        display: 'block',
        color: '#000000',
        minWidth: '125vm',
        width: '125vm',
        fontSize: '14px',
        '&:hover': {
            color: '#000000',
            textDecoration: 'none'
        }
    },
    menuItemStyleActions: {
        display: 'block',
        color: '#000000',
        fontWeight: 'bold',
        minWidth: '125vm',
        width: '125vm',
        fontSize: '13px',
        '&:hover': {
            color: '#000000',
            textDecoration: 'none'
        }
    }

})

const theme = createMuiTheme({

    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#009639'
        }
    }

});




const NavBarInternalUser = (props) => {

    const [dropdownValue, setDropdownValue] = useState(false);

    const [menuState, setMenuState] = useState(false);

    const [anchorEl, setAnchorEl] = useState(false);

    const [value, setValue] = useState(0);


    const { index } = props;


    useEffect(() => {


    });



    const navBarHandleUserMenu = (e) => {
        setMenuState(!menuState);
    }

    const navBarCloseUserMenu = (e) => {
        setMenuState(false);
    }

    const navBarCloseUserMenuSession = (e) => {
        setMenuState(false);
        window.localStorage.removeItem("tknUsr");
        window.location = "/auth";
    }



    const DropdownAction = () => {
        setDropdownValue(!dropdownValue);
    }

    const handleTabs = (e, val) => {
        setValue(val);
        switch (val) {
            case 0:
                window.location = '/internalUser/providerSelect';

                break;
            case 1:
                let prv = window.localStorage.getItem("currentProvider") || "Proveedor no seleccionado";
                if (prv != "Proveedor no seleccionado") {
                    window.location = '/internalUser/homePortalProvider';
                }
                else {
                    alert("Debe seleccionar un proveedor");
                }
                break;
        }
    }


    const classes = useStyles();

    function navBarDirHandler(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
    }

    return (
        <div className="navBarContainer">


            <div>

                <ThemeProvider theme={theme}>
                    <AppBar elevation={0} position='fixed' color='primary' className={classes.style}>
                        <Toolbar>
                            <IconButton><img className={classes.logoStyle} src={image} /></IconButton>

                            <div className="navBarDropdownContainer" >

                                <Dropdown isOpen={dropdownValue} toggle={DropdownAction} classes={{ root: classes.dropdownStyle }}>
                                    <DropdownToggle caret className={classes.dropdownStyle}>
                                        Portal - Usuario interno
      </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Portal - BackOffice</DropdownItem>
                                        <DropdownItem>Portal - Usuario Interno</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                            </div>

                            <Tabs classes={{ root: classes.tabStyle }} TabIndicatorProps={classes.indicator} onChange={handleTabs}
                                value={index} indicatorColor="secondary" textColor="primary"
                                TabIndicatorProps={{
                                    style: { background: "#009639", width: "2%", height: "6%", marginLeft: "12%" }
                                }}>

                                <Tab className={classes.btn0Style}  label='Seleccion proveedor'></Tab>
                                <Tab className={classes.btn0Style}  label='Administrar documentos' />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>

                <div className="navBarUserAvatarComponentContainer">


                    <div className="navBarUserAvatarComponentUserDataContainer" onClick={navBarHandleUserMenu}>
                        <Avatar alt="no image" src={image1} />

                        <span className="navBarUserAvatarComponentUserName">{localStorage.getItem("iUserName")}</span>
                    </div>

                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={menuState}
                        onClose={navBarCloseUserMenu}
                        className="navBarUserAvatarComponentUserMenu1"
                    >
                        <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyle}>Novedades de la secci??n <b>"Pagos"</b></MenuItem>
                        <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyle}>Novedades de la secci??n <b>"Avisos"</b></MenuItem>
                        <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyleActions}><Link to="/login/accountkeyformat" className={classes.menuItemStyleActions}>Cambio de clave</Link></MenuItem>
                        <MenuItem onClick={navBarCloseUserMenuSession} className={classes.menuItemStyleActions}>Cerrar sesi??n</MenuItem>
                    </Menu>

                </div>

            </div>

        </div>
    );
}

export default NavBarInternalUser;