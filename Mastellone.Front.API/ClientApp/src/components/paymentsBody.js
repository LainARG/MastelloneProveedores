import React from 'react';
import '../resources/styles/paymentsBody.css';
import userDataComponent from '../components/userDataComponent';
import NewsComponent from '../components/newsComponent';

class Body extends React.Component{

render(){

return(

<div className="paymentsNewsBodyContainer">

 <div className="paymentsNewsBodyLegendContainer">
 Estas son las novedades de Pagos desde tu último ingreso
 </div>
 
 <div className="paymentsNewsBodyNewsContainer">
 <NewsComponent></NewsComponent>
 </div>

 

</div>
	

);
}



}

export default Body;