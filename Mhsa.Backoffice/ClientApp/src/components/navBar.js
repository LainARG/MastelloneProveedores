import React,{useState} from 'react';
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
   marginLeft:'-1.2%',
   marginTop:"1%",
   width:'13%',
   minWidth:'13%',
   color:'#d1d1d1',
   '&.indicator':{
    widht:'0.5vm'
   }
  },
  btn1Style:{
   display:'inline',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform:'capitalize',
   fontSize:16,
   marginLeft:'-4%',
   marginTop:"1%",
   width:'13%',
   minWidth:'13%',
   color: '#d1d1d1',
  },
  btn2Style:{
   display:'inline',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform: 'capitalize',
   fontSize:16,
   marginLeft:'-1.2%',
   marginTop:"1%",
   width:'14%',
   minWidth:'14%',
   color: '#d1d1d1',
   '&.indicator':{
    widht:'0.5vm'
   }
  },
  btn3Style:{
   display:'inline',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform:'capitalize',
   fontSize:16,
   marginLeft:'2%',
   marginTop:"1%",
   width:'15%',
   minWidth:'15%',
   color: '#d1d1d1',
  },btn4Style:{
   display:'inline',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform: 'capitalize',
   fontSize:16,
   marginLeft:'-1.2%',
   marginTop:"1%",
   width:'13%',
   minWidth:'13%',
   color: '#d1d1d1',
   '&.indicator':{
    widht:'0.5vm'
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



const Navbar = ()=>{

const [dropdownValue,setDropdownValue] = useState(false);

const [handleUserMenu, setUserMenu] = useState(false);

const [menuState, setMenuState] = useState(false);

const [anchorEl, setAnchorEl] = useState(false)

const navBarHandleUserMenu = (e) => {
      
  setMenuState(!menuState);
}

const navBarCloseUserMenu = (e)=>{
  setMenuState(false);
}

const [value, setValue] = useState(0);

const DropdownAction = ()=>{
   setDropdownValue(!dropdownValue);	
}

const handleTabs = (e, val)=>{
setValue(val);
switch(val) {
  case 0:
    window.location='/login';
    break;
  case 1:
    // code block
    break;
  case 2:
    // code block
    break;
  case 3:
    window.location='/login/contact';
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
     value={value} indicatorColor="secondary" textColor="primary"
     TabIndicatorProps={{
           style: {background:"#009639", width:"2%", height:"6%", marginLeft:"5.5%" }
         }}>
    <Tab className={classes.btn0Style} label='Inicio'></Tab>
    <Tab className={classes.btn1Style} label='Pagos'/>
    <Tab className={classes.btn2Style} label='Documentos'/>
    <Tab className={classes.btn3Style} label='Contáctanos'/>
    <Tab className={classes.btn4Style} label='Avisos'/>
    </Tabs>
    </Toolbar>
	</AppBar>
	</ThemeProvider>
    
     <div className="navBarUserAvatarComponentContainer">


    <div className="navBarUserAvatarComponentUserDataContainer" onClick={navBarHandleUserMenu}>
    <Avatar alt="no image" src={image1}/>
    
     <span className="navBarUserAvatarComponentUserName">Lain Iwakura!</span>
    </div> 
    
    <Menu
         anchorEl={anchorEl}
         keepMounted
         open={menuState}
         className="navBarUserAvatarComponentUserMenu"
     >
     <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Pagos"</b></MenuItem>
     <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Avisos"</b></MenuItem>
     <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyleActions}><Link to="/login/accountkeyformat" className={classes.menuItemStyleActions}>Cambio de clave</Link></MenuItem>
     <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyleActions}>Cerrar sesión</MenuItem>
     </Menu>

     </div>

     </div>

	</div>
	);
}

export default Navbar;