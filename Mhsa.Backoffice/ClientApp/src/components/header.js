import React,{useState} from 'react';
import image from '../resources/images/logo.png';
import '../resources/styles/header.css';
import {Menu, MenuItem, AppBar, Toolbar, Typography, makeStyles, IconButton, Tabs, Tab} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import image1 from '../resources/images/lain.jpg';
import Avatar from '@material-ui/core/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles=makeStyles({
  
  style:{
   backgroundColor:'white',
   cursor:'pointer'
  },
  tabStyle:{
   display:'block',
   width:'100%',
   marginLeft:'2%'
  },
  logoStyle:{
   display:'inlineBlock',
   height:'100px',
   minHeight:'100px',
   marginLeft:'-15%'
  },
  btn0Style:{
   display:'inline',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform:'none',
   fontSize:16,
   marginLeft:'-1.5%',
   marginTop:"1%",
   width:'15%',
   minWidth:'13%',
   color:'#87847b',
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
   marginLeft:'0%',
   marginTop:"1%",
   width:'13%',
   minWidth:'13%',
   color:'#87847b'
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
   textTransform:'capitalize',
   fontSize:17,
   widht:'100px',
   marginLeft:'85%',
   marginTop:'-28%',
   border:'none',
   color:'#8c8777',
   fontFamily:'Arial, Helvetica, sans-serif'
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
   },
   indicator:{
    width:'15px',
    minWidth:'15px'
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



const Header= ()=>{

const [dropdownValue,setDropdownValue] = useState(false);

const [menuState, setMenuState] = useState(false);

    const [anchorEl, setAnchorEl] = useState(false);

    const [value, setValue] = useState(0);

const headerHandleUserMenu = (e)=>{
  setMenuState(!menuState);
  setAnchorEl(e.target);
}

const headerCloseUserMenu = (e)=>{
  setMenuState(false);
}



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
        setValue(1);
        setTimeout(function () { window.location = '/login/accountkeyformat'; }, 200);
    break;
  }
}


const classes = useStyles();


return(
    <div className="mainContainer">


    <div>
    <ThemeProvider theme={theme}>
    <AppBar elevation={0} position='fixed' color='primary' className={classes.style}>
    <Toolbar>
    <IconButton><img  className={classes.logoStyle} src={image}/></IconButton>
    <Tabs classes={{root: classes.tabStyle}}  onChange={handleTabs} value={value} 
     indicatorColor="secondary" textColor="primary" 
     TabIndicatorProps={{
           style: {background:"#009639", width:"2%", height:"6%", marginLeft:"6.5%" }
         }}>
    <Tab className={classes.btn0Style} label='Iniciar sesión'></Tab>
    <Tab className={classes.btn1Style} label='Contáctanos'/>
    </Tabs>
    </Toolbar>
    </AppBar>
    </ThemeProvider>
    </div>
    
    
     <div className="headerUserAvatarComponentContainer">


    <div className="headerUserAvatarComponentUserDataContainer" onClick={headerHandleUserMenu}>
    <Avatar alt="no image" src={image1}/>
    
                <span className="headerUserAvatarComponentUserName">Terry Wagner!</span>
    </div> 
    
    <Menu
         anchorEl={anchorEl}
         keepMounted
         open={menuState}
         onClose={headerCloseUserMenu}
         className="headerUserAvatarComponentUserMenu"
     >
     <MenuItem onClick={headerCloseUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Pagos"</b></MenuItem>
     <MenuItem onClick={headerCloseUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Avisos"</b></MenuItem>
     <MenuItem onClick={headerCloseUserMenu} className={classes.menuItemStyleActions} className={classes.menuItemStyleActions}>Cambio de clave</MenuItem>
     <MenuItem onClick={headerCloseUserMenu} className={classes.menuItemStyleActions}>Cerrar sesión</MenuItem>
     </Menu>

     </div>
    
    
    

    </div>
    );
}

export default Header;