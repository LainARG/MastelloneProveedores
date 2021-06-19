import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NavBarInternalUser from '../components/navBarInternalUser';
import InternalUserProviderSelectBody from '../components/internalUserProviderSelectBody';

class ProviderSelectInternalUserPage extends React.Component{


render(){

return(
<div>
<NavBarInternalUser/>
<InternalUserProviderSelectBody></InternalUserProviderSelectBody>
<Footer/>
</div>
);
}

}

export default ProviderSelectInternalUserPage;