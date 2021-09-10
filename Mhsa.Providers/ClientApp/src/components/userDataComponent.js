import React, { useEffect, useState } from 'react';
import '../resources/styles/userDataComponent.css';
import StatesContext from '../contexts/statesContext';

export default function UserDataComponent(props){

	const user = props;
    const newness = JSON.parse(window.localStorage.getItem("prvNns"));
    const [allStates, setAllStates] = useState("");
    
 useEffect(() => {

  if (allStates == "") {
    StatesContext.fetchStates().then((e) => { setAllStates(e); });
   }
     
}, [allStates]);

function getState(column){
if(allStates != null && allStates != undefined && allStates != ""){
let state = allStates.filter(state => state.id_estado == column)[0].descripcion_abreviada;
return state;
}
return "No definido";
}

return(

<div className="userDataComponentContainer">

<div className="userDataComponentLegend">Novedades.</div><br/>
<br/>
<br/>

{newness.map((column) => (
 <span>- La Factura <b>{column.letra_documento+column.prefijo_documento+column.numero_documento}</b> se encuentra en estado <b>{getState(column.id_estado)}</b> a partir del <b>{column.fecha_actualizacion}</b></span>
 ))
}

<br/>
<br/>
<br/>

 <div className="userDataComponentLegend">Tus datos.</div><br/>

		<div className="userDataComponentUserName">Nombre de usuario: &nbsp;{user.props.razon_social}</div>
		<div className="userDataComponentLocation">Localidad: &nbsp;{user.props.localidad}</div>
		<div className="userDataComponentCuit">CUIT asociado: &nbsp; {user.props.cuit}</div>
		<div className="userDataComponentPostalCode">Código Postal: &nbsp; {user.props.codigo_postal}</div>
		<div className="userDataComponentBusinessName">Razón social: &nbsp; {user.props.razon_social}</div>
		<div className="userDataComponentPhone">Teléfono: &nbsp; {user.props.telefono} </div>
		<div className="userDataComponentAddress">Domicilio: &nbsp; {user.props.domicilio}</div>
 
 

</div>
	

	);


}




