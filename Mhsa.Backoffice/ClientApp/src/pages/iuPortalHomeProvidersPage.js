import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import PortalHomeBody from '../components/portalHomeBody';
import CurrentProviderComponent from '../components/currentProviderComponent';

const index = 0;

class IuPortalHomeProvidersPage extends React.Component{



render(){

return(
<div>
<Navbar index={index} />
<CurrentProviderComponent/>
<PortalHomeBody></PortalHomeBody>
<Footer/>
</div>
);
}

}

export default IuPortalHomeProvidersPage;