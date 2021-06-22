import React, { useContext, useEffect, useState } from 'react';
import '../resources/styles/currentProviderComponent.css';
import { PaymentsContext } from "../contexts/paymentsContext";

export default function CurrentProviderComponent(props){

    const [provider, setProvider] = useState("");



return(

<div className="currentProviderContainer">


        <span className="currentProviderLegend">Proveedor seleccionado: </span><span className="currentProviderLegend1"> CUIT 30-64207252-4 CARTOCOR S.A.</span>

<div className="currentProviderBtnContainer">
 
            <button className="currentProviderBtn" color="primary" variant="outlined">
                    <span className="currentProvideBtnTxt"> Cambiar proveedor</span>
            </button>
            <span className="currentProviderBtn1">Administrar documentos</span>
 
 </div>
        



</div>


	);

}
