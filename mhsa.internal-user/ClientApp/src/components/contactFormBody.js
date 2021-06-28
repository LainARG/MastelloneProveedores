import React from 'react';
import '../resources/styles/contactFormBody.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import SmtpContext from '../contexts/smtpContext';


export default function ContactFormBody(){


    
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
  textTransform: 'capitalize',
  marginLeft: '-0.5%'
  }

})

    const classes = useStyles();

    const redirector = (url) => {
        window.location = url;
    }

    const mailSender = () => {
        let message = document.getElementById("userMessage").value.toString();
        SmtpContext.sendMail(message);
        redirector("");
    }


return(

<div className="contactFormBodyContainer">

 <div className="contactFormFieldsContainer">
 
 <span className="contactFormDescriptionLegendStyle">Contáctanos.</span><br/><br/>
 <p className="contactFormParagraphStyle" align="justify">Ud. puede hacernos conocer sus inquitudes, las cuales serán respondidas
  a la brevedad.</p>

 <p className="contactFormParagraphStyle1" align="justify"> <strong>Importante:</strong>
 &nbsp;Verifique la dirección de su e-mail. Si no tiene o desea cambiarla,
 por favor especifique el e-mail correcto en el mensaje para que podamos responder su inquietud.
 </p>
 
 <span className="contactFormSenderLegendStyle">Remitente</span><br/>
 <input className="contactFormSenderInputStyle" type="text"/><br/><br/>
 
 <span className="contactFormMessageLegendStyle">Mensaje</span><br/>
 <textarea id="userMessage" className="contactFormMessageInputStyle" type="text"/><br/><br/>

 <div className="contactFormBtnActionContainer">
 <ThemeProvider theme={theme}>
 <Button className={classes.btnActionStyle} onClick={ mailSender } color="primary" variant="contained" disableElevation>
       Enviar
 </Button>
 </ThemeProvider>
 </div><br/>






 </div>  
 

 








</div>


	);

}
