import React from 'react';
import '../resources/styles/newsComponent.css';

class NewsComponent extends React.Component{

render(){
/* El return debe iterar un bucle de objetos y un mensaje debe crearse a partir del mismo*/
return(

<div className="container">
 
 <span className="userNameStyle">- La <strong>factura 8800-00043112</strong> se encuentra en estado <strong> "A retirar"</strong> a partir del <strong>12/04/1991</strong></span><br/><br/>
 <span className="warningStyle"><strong>- Nuevo aviso</strong> recibido el <strong>13/04/1991</strong></span><br/>

</div>
	

);
}



}

export default NewsComponent;