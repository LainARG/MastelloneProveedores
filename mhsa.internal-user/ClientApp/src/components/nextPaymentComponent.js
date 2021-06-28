import React from 'react';
import '../resources/styles/nextPaymentComponent.css';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import { GrDocumentDownload } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

class NextPaymentComponent extends React.Component{

render(){

	return (


		<div className="nextPaymentComponentContainer">

		<div className="nextPaymentBackContainer">
				<IoIosArrowBack className="documentSearchBackIcon" />
				<span className="documentSearchBackLegend">Volver</span>

	    </div>


		

			<div className="nextPaymentTitleLegend">Detalle del siguiente pago:</div>
			<GrDocumentDownload fontSize="large" className="nextPaymentIconReport" /><span className="nextPaymentReportLegend"><b>Reporte</b></span>

			<div className="nextPaymentTableLegend">

			<span className="nextPaymentLegend1">Numero de pago</span>
			<span className="nextPaymentLegend2">Retirar en</span>
			<span className="nextPaymentLegend3">A partir de</span>
			<span className="nextPaymentLegend4">Estado</span>
		    <span className="nextPaymentLegend5">Total pago</span><br/>

       

	    

			<span className="nextPaymentLegend6">0800-00525245</span>
			<span className="nextPaymentLegend7">MHSA Tokio</span>
			<span className="nextPaymentLegend8">12/04/1991</span>
		    <span className="nextPaymentLegend9">A retirar</span>
				<span className="nextPaymentLegend10">$ 452.0</span>

		    </div>
        
	</div>
        
);
}



}

export default NextPaymentComponent;