import React, { useState } from 'react';
import '../resources/styles/contactFormBody.css';
import Button from '@material-ui/core/Button';
import { Modal } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SmtpContext from '../contexts/smtpContext';


export default function ContactFormBody(){


    const [modal, setModal] = useState(false);
    const [modalProps, setModalProps] = useState(false);

    const openModal = (props) => {
        setModalProps(props);
        document.getElementById("userMessage").value = "";
        setTimeout(function () { setModal(true); }, 100);
    }

    const closeModal = () => {
        setModal(false);
        window.location = window.location;
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
  textTransform: 'capitalize',
  marginLeft: '-0.5%'
  }

})

    const classes = useStyles();

    const mailSender = () => {
        let message = document.getElementById("userMessage").value.toString();
        SmtpContext.sendMail(message);
        setTimeout(function () { openModal(true); }, 1000);
    }

    const ShowModal = (


        <div className="contactModalContainer">

            <span className="contactModalMessage">Hemos recibido satisfactoriamente su mensaje,
            a la brevedad un miembro de nuestro equivo se contactará con usted.
            <br />
            <br />
            <p>Gracias por confiar en nosotros.</p>
            </span>
            <button className="contactModalBtnStyle" onClick={() => closeModal()}>Cerrar</button>


        </div>


    );

    const ContactModal = () => {

        return (
            <div>

                <Modal
                    open={modal}
                    onClose={openModal}
                >
                    {ShowModal}

                </Modal>
            </div>
        );

    }

   

return(

<div className="contactFormBodyContainer">

 <div className="contactFormFieldsContainer">
 
 <span className="contactFormDescriptionLegendStyle">Contáctanos.</span><br/><br/>
 <p className="contactFormParagraphStyle">Ud. puede hacernos conocer sus inquitudes, las cuales serán respondidas
  a la brevedad.</p>

 <p className="contactFormParagraphStyle1" align="justify"> <strong>Importante:</strong>
 &nbsp;Verifique la dirección de su e-mail. Si no tiene o desea cambiarla,
 por favor especifique el e-mail correcto en el mensaje para que podamos responder su inquietud.
 </p>
 <div className="contactFormBodyFormMessage">
 <span className="contactFormSenderLegendStyle">Remitente</span><br/>
 <input className="contactFormSenderInputStyle" type="text"/><br/><br/>
 
 <span className="contactFormMessageLegendStyle">Mensaje</span><br/>
 <textarea id="userMessage" className="contactFormMessageInputStyle" type="text"/><br/><br/>

 <div className="contactFormBtnActionContainer">
 <ThemeProvider theme={theme}>
 <Button className={classes.btnActionStyle} onClick={ mailSender } color="primary" variant="contained" disableElevation>
                       <b> Enviar</b>
 </Button>
  
                    <ContactModal open={ openModal }/>
                    </ThemeProvider>
 </div>
 </div><br/>






 </div>  
 

 








</div>


	);

}
