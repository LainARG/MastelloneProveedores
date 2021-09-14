import React, { useContext, useEffect, useState } from 'react';
import '../resources/styles/loginbody.css';
import image from '../resources/images/fb.png';
import image2 from '../resources/images/gmail.png';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { UserContext } from "../contexts/userContext";
import { DocumentsContext } from "../contexts/documentsContext";
import { PaymentsContext } from "../contexts/paymentsContext";
import login from "../auth/auth";

export default function Body(){

    const [allUsers, setAllUsers] = useState(null);
    const [allDocuments, setAllDocuments] = useState(null);
    const [allPayments, setAllPayments] = useState(null);

    useEffect(() => {
        setTimeout(() => { setContext(); }, 500)
    })
  


    const setContext =()=>{
        console.log("Loading context...");
        setAllUsers(UserContext.allUsers);
        setAllDocuments(DocumentsContext.allDocuments);
        setAllPayments(PaymentsContext.allPayments);
     }
   

  function fbIcon(){
    return(
    
        <img className="loginBodyFbIconStyle" src={image} height={18} width={18}/>
    
    );

  }

  function gmailIcon(){
    return(
    
        <img className="loginBodyGmailIconStyle" src={image2} height={18} width={18}/>
    
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

const forgotRedirect = (e)=>{
  e.preventDefault();
}

    const dataConsoleTry = () => {

    }

    const authenticate = () => {
        let user = document.getElementById("loginBodyCodeInputStyle").value;
        let pass = document.getElementById("loginBodyKeyInputStyle").value;
        let credentials = { Username: user, Password: pass }
        login(JSON.stringify(credentials));
    }

return(

<div className="loginBodyContainer">



<div className="loginBodyFormContainer">
<form action="action_page.php" method="post">
 

 <span className="loginBodyActionLegendStyle">Iniciar sesión en el portal.</span><br/>
 <span className="loginBodyCodeLegendStyle">Código</span><br/>
 <input className="loginBodyCodeInputStyle" type="text" id="loginBodyCodeInputStyle"/><br/><br/>
 <span className="loginBodyKeyLegendStyle">Clave</span><br/>
 <input className="loginBodyKeyInputStyle" type="password" id="loginBodyKeyInputStyle"/><br/>
 <button className="loginBodyForgotLegendStyle" onClick={forgotRedirect}>No recuerdo la clave</button><br/><br/>
 <div className="loginBodyBtnLoginContainer">
 <Button className="loginBodyBtnLoginStyle" color="primary" variant="contained" disableElevation onClick={ authenticate }>
       Ingresar
 </Button>
 </div><br/><br/><br/>

</form>
</div>



</div>


	);

}
