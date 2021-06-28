import React, { useContext, useEffect, useState } from 'react';
import '../resources/styles/currentProviderComponent.css';
import { PaymentsContext } from "../contexts/paymentsContext";

export default function CurrentProviderComponent(props){

 const [provider, setProvider] = useState("PROVEEDOR NO SELECCIONADO");


 useEffect(() => {
     getProvider();
  });


    function getProvider() {
        setProvider(JSON.parse(window.localStorage.getItem("currentProvider")).cuit);
        console.log(provider);
    }

    function ChangeProvider() {
        window.location = "/internaluser/providerselect";
    }

    function ManageDocumentProvider() {
        window.location = "/internalUser/manageDocumentProvider";
    }


return(

<div className="currentProviderContainer">


        <span className="currentProviderLegend">Proveedor seleccionado: </span><span className="currentProviderLegend1"> CUIT { provider }</span>

<div className="currentProviderBtnContainer">

            <button className="currentProviderBtn" onClick={ ChangeProvider }>
                    <span className="currentProvideBtnTxt"> Cambiar proveedor</span>
            </button>
            <span className="currentProviderBtn1" onClick={ManageDocumentProvider}>Administrar documentos</span>
 
 </div>
        



</div>


	);

}
