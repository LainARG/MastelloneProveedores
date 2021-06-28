import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../resources/styles/pageComponentStyle.css';
import Footer from '../components/footer';
import PaymentsReportBody from '../components/paymentsReportBody';
import Navbar from '../components/navBar';
import CurrentProviderComponent from '../components/currentProviderComponent';

const index = 1;

class IuPaymentsReportPage extends React.Component{

render(){

return(
<div>
<Navbar index={index} />
<CurrentProviderComponent className="iuPaymentsReportPage"/>
<PaymentsReportBody/>
<Footer/>
</div>
);

}

}
export default IuPaymentsReportPage;


