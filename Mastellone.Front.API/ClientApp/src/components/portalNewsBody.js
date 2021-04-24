import React from 'react';
import '../resources/styles/portalNewsBody.css';
import UserDataComponent from '../components/userDataComponent';
import NewsComponent from '../components/newsComponent';

class Body extends React.Component{

render(){

return(

<div className="portalNewsBodyContainer">

 <div className="portalNewsBodyLegendsContainer">
 <span className="portalNewsBodyLegend">!Hola! Te damos la bienvenida a nuestro Portal - Proveedores.</span><br/>
 <span className="portalNewsBodyLegend1">Novedades.</span><br/>
 </div>

 <div className="portalNewsBodyNewsContainer">
 <NewsComponent></NewsComponent>
 </div>

 <div className="portalNewsBodyUserDataContainer">
 <UserDataComponent></UserDataComponent>
 </div>
 

</div>
	

);
}



}

export default Body;