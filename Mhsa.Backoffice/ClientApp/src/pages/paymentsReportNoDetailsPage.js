import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import PaymentsReportNoDetailsBody from '../components/paymentsReportNoDetailsBody';
import HeaderVoid from '../components/headerVoid';

class PaymentsReportNoDetailsPage extends React.Component{

render(){

return(
    <div>
  <HeaderVoid />
<PaymentsReportNoDetailsBody/>
<Footer/>
</div>
);

}

}
export default PaymentsReportNoDetailsPage;


