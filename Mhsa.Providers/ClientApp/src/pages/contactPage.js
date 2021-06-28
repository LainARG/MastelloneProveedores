import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import ContactFormBody from '../components/contactFormBody';

const index = 3;

class ContactPage extends React.Component{

render(){

return(
<div>
<Navbar index={ index }/>
<ContactFormBody/>
<Footer/>
</div>
);

}

}
export default ContactPage;