import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import PaymentsBody from '../components/paymentsBody';

class PaymentsPage extends React.Component{


render(){

return(
<div>
<Navbar/>
<PaymentsBody></PaymentsBody>
<Footer/>
</div>
);
}

}

export default PaymentsPage;