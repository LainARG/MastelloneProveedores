import React from 'react';
import Button from '@material-ui/core/Button';
import '../resources/styles/keyFormatPortalBody.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';



export default function KeyFormatPortalBody(){
 
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

 <div className="keyFormatPortalBodyContainer">
 

 <span className="keyFormatPortalBodyActionLegendStyle">Cambio de clave.</span><br/>
 
 <span className="keyFormatPortalBodyCodeLegendStyle">Clave actual</span><br/>
 <input className="keyFormatPortalBodyCodeInputStyle" type="text"/><br/><br/>
 <br/>
 <span className="keyFormatPortalBodyCodeLegendStyle">Nueva clave</span><br/>
 <input className="keyFormatPortalBodyCodeInputStyle" type="text"/><br/><br/>

 <span className="keyFormatPortalBodyCodeLegendStyle">Reiterar nueva clave</span><br/>
 <input className="keyFormatPortalBodyCodeInputStyle" type="text"/><br/>
 

<div className="keyFormatPortalBodyBtnActionPortalContainer">
 <ThemeProvider theme={theme}>
<Button onClick={actionSend} className={classes.btnActionStyle} color="primary" variant="contained" disableElevation >
       Finalizar
 </Button>
 </ThemeProvider>

 </div> 



 </div>

);


 
}