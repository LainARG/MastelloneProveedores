import React from 'react';
import '../resources/styles/userDataComponent.css';

class UserDataComponent extends React.Component{

render(){

return(

<div className="userDataComponentContainer">

 <div className="userDataComponentLegend">Tus datos.</div><br/>

 <div className="userDataComponentUserName">Nombre de usuario: </div>
 <div className="userDataComponentLocation">Localidad: </div>
 <div className="userDataComponentCuit">CUIT asociado: </div>
 <div className="userDataComponentPostalCode">Código Postal: </div>
 <div className="userDataComponentBusinessName">Razón social: </div>
 <div className="userDataComponentPhone">Teléfono: </div>
 <div className="userDataComponentAddress">Domicilio: </div>
 
 

</div>
	

);
}



}

export default UserDataComponent;