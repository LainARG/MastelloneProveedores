import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import HeaderPortalProviders from '../components/headerPortalProviders';
import PortalHomeBody from '../components/portalHomeBody';

class PortalHomePage extends React.Component{


render(){

return(
<div>
<HeaderPortalProviders/>
<PortalHomeBody></PortalHomeBody>
<Footer/>
</div>
);
}

}

export default PortalHomePage;