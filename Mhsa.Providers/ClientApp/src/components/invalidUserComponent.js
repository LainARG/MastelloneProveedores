import React from 'react';
import '../resources/styles/footer.css';



class InvalidUserComponent extends React.Component{



    render() {

        function loginPageRedir() {
            window.location = "/auth";
        }

return(

<div className="invalidUserContainer">

        <h3>Usuario invalido, o no correspondiente a un proveedor valido!</h3>

        <br /><br />
        <button onClick={ loginPageRedir }>Volver</button>

</div>


);}

}

export default InvalidUserComponent;