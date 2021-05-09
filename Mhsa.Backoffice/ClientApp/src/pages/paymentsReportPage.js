import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import PaymentsReportBody from '../components/paymentsReportBody';
import Navbar from '../components/navBar';

class PaymentsReportPage extends React.Component{

render(){

return(
<div>
<Navbar/>
<PaymentsReportBody/>
<Footer/>
</div>
);

}

}
export default PaymentsReportPage;


