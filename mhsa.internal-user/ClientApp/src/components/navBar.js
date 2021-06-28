import React,{useState, useEffect} from 'react';
import image from '../resources/images/logo.png';
import '../resources/styles/navBar.css';
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Tabs, Tab} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import { Menu, MenuItem } from '@material-ui/core';
import image1 from '../resources/images/lain.jpg';
import Avatar from '@material-ui/core/Avatar';
import {Dropdown,DropdownItem,DropdownMenu, DropdownToggle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Link} from "react-router-dom";


const useStyles=makeStyles({
  
  style:{
   backgroundColor:'white',
   cursor:'pointer'
  },
  tabStyle:{
   display:'block',
   width:'100%',
   marginLeft:'14%'
  },
  logoStyle:{
   display:'inlineBlock',
   height:'100px',
   minHeight:'100px',
   marginLeft:'-15%'
  },
  btn0Style:{
   display:'inline',
   backgroundColor: 'transparent',
   textTransform: 'capitalize',
   cursor:'pointer',
   fontWeight:'900',
   textTransform:'none',
   fontSize:16,
   marginLeft:'1%',
   marginTop:"1%",
   width:'auto',
   minWidth:'auto',
   color:'#d1d1d1',
   '&.indicator':{
    widht:'0.5vm'
   }
    }, btn1Style: {
        display: 'inline',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: '900',
        textTransform: 'capitalize',
        fontSize: 16,
        marginLeft: '0.5%',
        marginTop: "1%",
        width: 'auto',
        minWidth: 'auto',
        color: '#87847b'
    },
    btn2Style: {
        display: 'inline',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: '900',
        textTransform: 'none',
        fontSize: 16,
        marginLeft: '0.5%',
        marginTop: "1%",
        width: 'auto',
        minWidth: 'auto',
        color: '#87847b',
        '&.indicator': {
            widht: '0.5vm'
        }
    },
    btn3Style: {
        display: 'inline',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: '900',
        textTransform: 'capitalize',
        fontSize: 16,
        marginLeft: '0.5%',
        marginTop: "1%",
        width: 'auto',
        minWidth: 'auto',
        color: '#87847b'
    }, btn4Style: {
        display: 'inline',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: '900',
        textTransform: 'none',
        fontSize: 16,
        marginLeft: '0.5%',
        marginTop: "1%",
        width: '13%',
        minWidth: '13%',
        color: '#87847b',
        '&.indicator': {
            widht: '0.5vm'
        }
    },
  dropdownStyle:{
  '&:hover,&:focus,&:active': { 
   backgroundColor:'transparent',
   color:'#8c8777'
   },
   '&:enabled': { 
   backgroundColor:'transparent',
   color:'#8c8777'
   },
   display:'inlineBlock',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   fontFamily:'arial',
   textTransform:'capitalize',
   fontSize:17,
   widht:'100px',
   marginLeft:'85%',
   marginTop:'-28%',
   border:'none',
   color:'#8c8777',
   fontFamily:'Arial, Helvetica, sans-serif'
   },
   userMenuItem:{
   display: 'flex',
   width: '200px',
   minWidth:'200px',
   justifyContent:"space-between"
   },
   menuItemStyle:{
    display:'block',
    color:'#000000',
    minWidth:'125vm',
    width:'125vm',
    fontSize:'14px',
    '&:hover':{
     color:'#000000',
     textDecoration:'none'
    }
   },
   menuItemStyleActions:{
    display:'block',
    color:'#000000',
    fontWeight:'bold',
    minWidth:'125vm',
    width:'125vm',
    fontSize:'13px',
    '&:hover':{
     color:'#000000',
     textDecoration:'none'
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
    }}
    
  });
  
  const menuTheme = createMuiTheme({
    overrides: {
    MuiList: {
      root:{
      display:'block',
      width: '325px'
      }
    }
  }
  });

const setPerms = () => {
    /*let permsList = [];
    let perms = window.localStorage.getItem("tknPms");

    if (perms.includes("Inicio")) {
        permsList.push("inicio");
    }
    if(perms.includes("ProveedorPago")) {
        permsList.push("Pagos");
    }
    if (perms.includes("ProveedorDocumento")) {
        permsList.push("Documentos");
    }
    if (perms.includes("ProveedorContacto")) {
        permsList.push("Contacto");
    }
    if (perms.includes("ProveedorAviso")) {
        permsList.push("Avisos");
    }
    
    return permsList;*/
}


const Navbar = (props)=>{

const [dropdownValue,setDropdownValue] = useState(false);

const [menuState, setMenuState] = useState(false);

const [anchorEl, setAnchorEl] = useState(false);

const tokenUser = window.localStorage.getItem("tknUsr");

const tokenPerms = window.localStorage.getItem("tknPms");

const { index } = props;

    const [permsList, setPermsList] = useState(setPerms());

useEffect(() => {

   
});

  
    
const navBarHandleUserMenu = (e)=>{
  setMenuState(!menuState);
}

const navBarCloseUserMenu = (e)=>{
  setMenuState(false);
    }

    const navBarCloseUserMenuSession = (e) => {
        setMenuState(false);
        window.localStorage.removeItem("tknUsr");
        window.location = "/auth";
    }

const [value, setValue] = useState(0);

const DropdownAction = ()=>{
   setDropdownValue(!dropdownValue);	
}

const handleTabs = (e, val)=>{
setValue(val);
switch(val) {
    case 0:
        window.location = '/portal/providers';
    
    break;
    case 1:
        window.location = '/internalUser/payments';
    break;
  case 2:
        setTimeout(function () { window.location = '/documents'; }, 100);
    break;
  case 3:
        setTimeout(function () { window.location = '/contact'; }, 100);
    break;
  case 4:
    // code block
    break;
  }
}


const classes = useStyles();


return(
	<div className="navBarContainer">


    <div>

    <ThemeProvider theme={theme}>
	  <AppBar elevation={0} position='fixed' color='primary' className={classes.style}>
    <Toolbar>
    <IconButton><img  className={classes.logoStyle} src={image}/></IconButton>

    <div className="navBarDropdownContainer" >

     <Dropdown isOpen={dropdownValue} toggle={DropdownAction} classes={{root: classes.dropdownStyle}}>
      <DropdownToggle caret className={classes.dropdownStyle}>
       Portal - Proveedores
      </DropdownToggle>  
      <DropdownMenu> 
      <DropdownItem>Portal - BackOffice</DropdownItem>
      <DropdownItem>Portal - Usuario Interno</DropdownItem>
      </DropdownMenu> 
     </Dropdown>

     </div>

    <Tabs classes={{root: classes.tabStyle }} TabIndicatorProps={classes.indicator} onChange={handleTabs}
     value={index} indicatorColor="secondary" textColor="primary"
     TabIndicatorProps={{
           style: {background:"#009639", width:"2%", height:"6%", marginLeft:"3.5%" }
                            }}>
      
                                   
                                        <Tab className={classes.btn0Style} label='Inicio'></Tab>
                                        <Tab className={classes.btn1Style} label='Pagos'/>
                                        <Tab className={classes.btn2Style} label='Documentos'/>
                                        <Tab className={classes.btn3Style} label='Contáctanos'/>
                                        <Tab className={classes.btn4Style} label='Avisos' />*/
                                    
   
    </Tabs>
    </Toolbar>
	</AppBar>
	</ThemeProvider>
    
     <div className="navBarUserAvatarComponentContainer">


    <div className="navBarUserAvatarComponentUserDataContainer" onClick={navBarHandleUserMenu}>
    <Avatar alt="no image" src={image1}/>
    
                    <span className="navBarUserAvatarComponentUserName">{ "UsuarioInterno" }</span>
    </div> 
    
    <Menu
         anchorEl={anchorEl}
         keepMounted
         open={menuState}
         onClose={navBarCloseUserMenu}
         className="navBarUserAvatarComponentUserMenu1"
     >
     <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Pagos"</b></MenuItem>
     <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Avisos"</b></MenuItem>
     <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyleActions}><Link to="/login/accountkeyformat" className={classes.menuItemStyleActions}>Cambio de clave</Link></MenuItem>
     <MenuItem onClick={navBarCloseUserMenuSession} className={classes.menuItemStyleActions}>Cerrar sesión</MenuItem>
     </Menu>

     </div>

     </div>

	</div>
	);
}

export default Navbar;