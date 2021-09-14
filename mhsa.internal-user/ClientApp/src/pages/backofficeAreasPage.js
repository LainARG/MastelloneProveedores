import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NavBarBackoffice from '../components/navBarBackoffice';
import BackofficeAreasManagement from '../components/backofficeAreasManagement';

class BackofficeAreasPage extends React.Component{


render(){

return(
<div>
    <NavBarBackoffice />
        <BackofficeAreasManagement />
    <Footer/>
</div>
);
}

}

export default BackofficeAreasPage;