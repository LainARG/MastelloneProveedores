import React from 'react';
import '../resources/styles/loginbody.css';
import image from '../resources/images/fb.png';
import image2 from '../resources/images/gmail.png';
import Button from '@material-ui/core/Button';
import { Icon } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider  }  from '@material-ui/core/styles';

class Body extends React.Component{



render(){

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

const forgotRedirect = (e)=>{
  e.preventDefault();
  window.location = "/login/accountkeyformat";
}

return(

<div className="loginBodyContainer">



<div className="loginBodyFormContainer">
<form action="action_page.php" method="post">
 

 <span className="loginBodyActionLegendStyle">Iniciar sesión en el portal.</span><br/>
 <span className="loginBodyCodeLegendStyle">Código</span><br/>
 <input className="loginBodyCodeInputStyle" type="text"/><br/><br/>
 <span className="loginBodyKeyLegendStyle">Clave</span><br/>
 <input className="loginBodyKeyInputStyle" type="text"/><br/>
 <button className="loginBodyForgotLegendStyle" onClick={forgotRedirect}>No recuerdo la clave</button><br/><br/>
 <div className="loginBodyBtnLoginContainer">
 <Button className="loginBodyBtnLoginStyle" color="primary" variant="contained" disableElevation >
       Ingresar
 </Button>
 </div><br/><br/><br/>
 
 <span className="loginBodyOrLegendStyle">  -o bien mediante- </span><br/><br/>

 <div className="loginBodyGmailBtnContainer">
 <ThemeProvider theme={theme}>
 <Button className="loginBodyGmailBtnStyle" color="primary" variant="outlined" startIcon={gmailIcon()}>
      <span className="loginBodyTextGmailBtnStyle"> Gmail</span>
 </Button>
 </ThemeProvider>
 </div>

  <div className="loginBodyFbBtnContainer">
 <Button className="loginBodyFbBtnStyle" color="primary" variant="outlined" startIcon={fbIcon()}>
       <span className="loginBodyTextfbBtnStyle">Facebook</span>
 </Button>
 </div><br/><br/><br/>

</form>
</div>



</div>


	);

}


}
export default Body;