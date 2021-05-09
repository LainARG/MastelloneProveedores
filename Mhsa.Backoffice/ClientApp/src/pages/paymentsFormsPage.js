import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import PaymentsFormsBody from '../components/paymentsFormsBody';
import Navbar from '../components/navBar';

class PaymentsFormsPage extends React.Component{

render(){

return(
<div>
<Navbar/>
<PaymentsFormsBody/>
<Footer/>
</div>
);

}

}
export default PaymentsFormsPage;


