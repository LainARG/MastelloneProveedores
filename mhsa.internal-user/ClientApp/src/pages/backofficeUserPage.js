import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NavBarInternalUser from '../components/navBarInternalUser';
import BackofficeUserManagement from '../components/backofficeUserManagement';

class BackofficeUserPage extends React.Component{


render(){

return(
<div>
    <NavBarInternalUser />
        <BackofficeUserManagement />
    <Footer/>
</div>
);
}

}

export default BackofficeUserPage;