import React from 'react';
import '../resources/styles/userDataComponent.css';

export default function UserDataComponent(props){

	const user = props;
	console.log(props);

return(

<div className="userDataComponentContainer">

 <div className="userDataComponentLegend">Tus datos.</div><br/>

		<div className="userDataComponentUserName">Nombre de usuario: &nbsp;{ user.props.nombre }</div>
		<div className="userDataComponentLocation">Localidad: &nbsp;{user.props.localidad}</div>
		<div className="userDataComponentCuit">CUIT asociado: &nbsp; {user.props.cuit}</div>
		<div className="userDataComponentPostalCode">Código Postal: &nbsp; {user.props.codigo_postal}</div>
		<div className="userDataComponentBusinessName">Razón social: &nbsp; {user.props.razon_social}</div>
		<div className="userDataComponentPhone">Teléfono: &nbsp; {user.props.telefono} </div>
		<div className="userDataComponentAddress">Domicilio: &nbsp; {user.props.domicilio}</div>
 
 

</div>
	

	);


}




