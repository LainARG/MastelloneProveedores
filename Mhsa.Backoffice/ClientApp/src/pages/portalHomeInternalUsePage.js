import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import HeaderPortalInternalUse from '../components/headerPortalInternalUse';
import PortalHomeBody from '../components/portalHomeBody';

class PortalHomePage extends React.Component{


render(){

return(
<div>
<HeaderPortalInternalUse/>
<PortalHomeBody></PortalHomeBody>
<Footer/>
</div>
);
}

}

export default PortalHomePage;