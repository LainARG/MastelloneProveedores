import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import HeaderPortalInternalUse from '../components/headerPortalInternalUse';
import PortalHomeInternalUserBody from '../components/portalHomeInternalUserBody';

class PortalHomeInternalUserPage extends React.Component{


render(){

return(
<div>
<HeaderPortalInternalUse/>
<PortalHomeInternalUserBody></PortalHomeInternalUserBody>
<Footer/>
</div>
);
}

}

export default PortalHomeInternalUserPage;