import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NavBarBackoffice from '../components/navBarBackoffice';
import BackofficeCommunicationsCreate from '../components/backofficeCommunicationsCreate';

class BackofficeCommunicationsPageCreate extends React.Component{


render(){

return(
<div>
    <NavBarBackoffice />
        <BackofficeCommunicationsCreate />
    <Footer/>
</div>
);
}

}

export default BackofficeCommunicationsPageCreate;