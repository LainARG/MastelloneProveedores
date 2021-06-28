import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import PaymentsReportDetailsBody from '../components/paymentsReportDetailsBody';
import HeaderVoid from '../components/headerVoid';

class PaymentsReportDetailsPage extends React.Component{

render(){

return(
    <div>
  <HeaderVoid />
<PaymentsReportDetailsBody/>
<Footer/>
</div>
);

}

}
export default PaymentsReportDetailsPage;


