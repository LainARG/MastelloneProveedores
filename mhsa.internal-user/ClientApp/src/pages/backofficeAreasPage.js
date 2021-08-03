import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NavBarInternalUser from '../components/navBarInternalUser';
import BackofficeAreasManagement from '../components/backofficeAreasManagement';

class BackofficeAreasPage extends React.Component{


render(){

return(
<div>
    <NavBarInternalUser />
        <BackofficeAreasManagement />
    <Footer/>
</div>
);
}

}

export default BackofficeAreasPage;