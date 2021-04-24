import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Header from '../components/header';
import ContactFormBody from '../components/contactFormBody';

class ContactPage extends React.Component{

render(){

return(
<div>
<Header/>
<ContactFormBody/>
<Footer/>
</div>
);

}

}
export default ContactPage;