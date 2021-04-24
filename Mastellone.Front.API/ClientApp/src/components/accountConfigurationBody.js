import React from 'react';
import '../resources/styles/accountConfigurationBody.css';
import image from '../resources/images/fb.png';
import image2 from '../resources/images/gmail.png';
import Button from '@material-ui/core/Button';
import { Icon } from "@material-ui/core";
import {green} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';

export default function AccountConfigurationBody(){





  function fbIcon(){
    return(
    
        <img className="fbIconStyle" src={image} height={18} width={18}/>
    
    );

  }

  function gmailIcon(){
    return(
    
        <img className="gmailIconStyle" src={image2} height={18} width={18}/>
    
    );

  }
    
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
  width:'200px',
  heigth:'35px',
  cursor:'pointer',
  textTransform: 'capitalize'
  }

})

const classes = useStyles();


return(

<div className="accountConfigurationBodyContainer">

 <div className="fieldsContainer">
 <span className="descriptionLegendStyle">Configuración inicial de la cuenta.</span><br/><br/>

 <div className="container1">
 <span className="nameLegendStyle">Nombre</span>
 <span className="lastnameLegendStyle">Apellido</span><br/>
 
 <input className="nameInputStyle" type="text"/>
 <input className="lastnameInputStyle" type="text"/>
 </div> 

 <div className="container2">
 <span className="mailLegendStyle">Mail</span>
 <span className="usernameLegendStyle">Nombre de usuario</span><br/>
 
 <input className="mailInputStyle" type="text"/>
 <input className="usernameInputStyle" type="text"/>
 </div> 


 <div className="container3">
 <span className="cuitLegendStyle">CUIT asociado</span>
 <span className="businessNameLegendStyle">Razón social</span><br/>
 
 <input className="cuitInputStyle" type="text"/>
 <input className="businessNameInputStyle" type="text"/>
 </div> 


 <div className="container4">
 <span className="addressLegendStyle">Domicilio</span>
 <span className="locationLegendStyle">Localidad</span><br/>
 
 <input className="addressInputStyle" type="text"/>
 <input className="locationInputStyle" type="text"/>
 </div> 


<div className="container5">
 <span className="postalCodeLegendStyle">Código Postal</span>
 <span className="phoneLegendStyle">Teléfono</span><br/>
 
 <input className="postalCodeInputStyle" type="text"/>
 <input className="phoneInputStyle" type="text"/>
 </div> 



 <div className="accountConfigurationBtnActionContainer">
 <ThemeProvider theme={theme}>
 <Button className={classes.btnActionStyle} color="primary" variant="contained" disableElevation>
       Finalizar
 </Button>
 </ThemeProvider>
 </div><br/><br/><br/>






 </div>  
 

 








</div>


	);

}
