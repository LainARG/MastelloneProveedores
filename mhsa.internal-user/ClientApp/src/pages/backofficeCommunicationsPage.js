import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NavBarBackoffice from '../components/navBarBackoffice';
import BackofficeCommunicationsManagement from '../components/backofficeCommunicationsManagement';

class BackofficeCommunicationsPage extends React.Component{


render(){

return(
<div>
    <NavBarBackoffice />
        <BackofficeCommunicationsManagement />
    <Footer/>
</div>
);
}

}

export default BackofficeCommunicationsPage;