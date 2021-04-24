import React from 'react';
import '../resources/styles/portalHomeBody.css';
import UserDataComponent from './userDataComponent';

class PortalHomeBody extends React.Component{

render(){

return(

<div className="portalHomeContainer">

 <span className="portalHomeLegend1">!Hola! Te damos la bienvenida a nuestro portal.</span>
 
 <span className="portalHomeLegend2">Para comenzar, seleccioná tu ingreso a la plataforma desde la barra del Menu.</span><br/><br/><br/>
  
 <UserDataComponent/>
 
 

</div>
	

);
}



}

export default PortalHomeBody;