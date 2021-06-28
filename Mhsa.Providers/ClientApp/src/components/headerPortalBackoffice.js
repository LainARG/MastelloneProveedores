import React,{useState} from 'react';
import image from '../resources/images/logo.png';
import '../resources/styles/headerPortal.css';
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Tabs, Tab} from '@material-ui/core';
import TabPanel from '@material-ui/lab/TabPanel';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Dropdown,DropdownItem,DropdownMenu, DropdownToggle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAvatarComponent from './userAvatarComponent';

const useStyles=makeStyles({
  
  style:{
   backgroundColor:'transparent',
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
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform:'capitalize',
   fontSize:16,
   marginLeft:'0%',
   width:'auto',
   minWidth:'auto',
   color:'#87847b'
  },
  btn1Style:{
   display:'inline',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform:'capitalize',
   fontSize:16,
   marginLeft:'2%',
   width:'auto',
   minWidth:'auto',
   color:'#87847b'
  },
  btn2Style:{
   display:'inline',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform:'capitalize',
   fontSize:16,
   marginLeft:'2%',
   width:'auto',
   minWidth:'auto',
   color:'#87847b'
  },
  btn3Style:{
   display:'inline',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform:'capitalize',
   fontSize:16,
   marginLeft:'2%',
   width:'auto',
   minWidth:'auto',
   color:'#87847b'
  },
  btn4Style:{
   display:'inline',
   backgroundColor:'transparent',
   cursor:'pointer',
   fontWeight:'900',
   textTransform:'capitalize',
   fontSize:16,
   marginLeft:'2%',
   width:'auto',
   minWidth:'auto',
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
   fontWeight:'600',
   textTransform:'capitalize',
   fontSize:22,
   widht:'100px',
   marginLeft:'85%',
   marginTop:'-28%',
   border:'none',
   color:'#8c8777',
   fontFamily:'Arial, Helvetica, sans-serif'
   },
   dditem:{
    color:'#000000',
    opacity:0.5,
    fontSize:16,
    fontWeight:'bold',
    minWidth:100
   },
   avatarStyle:{
    display:'block',
    position:'relative',
    width:'100px',
    zIndex:2000
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



const HeaderPortalBackoffice = ()=>{

const [dropdownValue,setDropdownValue] = useState(false);

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
  <div className="headerPortalContainer">


    <div>
   <ThemeProvider theme={theme}>
    <AppBar elevation={0} position='fixed' color='primary' className={classes.style}>
    <Toolbar>
    <IconButton><img  className={classes.logoStyle} src={image}/></IconButton>
    <div className="headerPortalDropdownContainer">

     <Dropdown isOpen={dropdownValue} toggle={DropdownAction} classes={{root: classes.dropdownStyle}}>
      <DropdownToggle caret className={classes.dropdownStyle}>
       Seleccionar ingreso
      </DropdownToggle>  
      <DropdownMenu> 
    
      <DropdownItem className={classes.dditem}>Backoffice</DropdownItem>
      
      </DropdownMenu> 
      
      </Dropdown>

     </div>
    
    </Toolbar>
    </AppBar>
    </ThemeProvider>
    </div>

    <UserAvatarComponent></UserAvatarComponent>
    

  </div>
  );
}

export default HeaderPortalBackoffice;