import React from 'react';
import Button from '@material-ui/core/Button';
import '../resources/styles/keyFormatBody.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';



export default function KeyFormatBody(){
 
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009639',
    },
    secondary: {
      main: '#009639',
    },
  },
}); 


const useStyles = makeStyles({
  btnActionStyle:{
  width:'150px',
  heigth:'35px',
  cursor:'pointer',
  textTransform: 'capitalize',
  marginLeft:"-1%"
  }

})

const classes = useStyles();

const actionSend = (e)=>{
   e.preventDefault();
   window.location="/login/accountkeyforgot";
}



 return(

 <div className="keyFormatContainer">
 

         <div className="documentFilterMenu">
             <Menu
                 anchorEl={anchorEl}
                 keepMounted
                 open={true}
                 className="documentFilterMenu"
             >
                 <MenuItem onClick={navBarCloseUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Pagos"</b></MenuItem>

             </Menu>
         </div>  

 

 </div>

);


 
}