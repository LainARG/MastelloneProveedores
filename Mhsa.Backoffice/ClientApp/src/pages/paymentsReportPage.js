import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import PaymentsReportBody from '../components/paymentsReportBody';
import Navbar from '../components/navBar';

const index = 1;

class PaymentsReportPage extends React.Component{

render(){

return(
<div>
<Navbar index={ index }/>
<PaymentsReportBody/>
<Footer/>
</div>
);

}

}
export default PaymentsReportPage;


