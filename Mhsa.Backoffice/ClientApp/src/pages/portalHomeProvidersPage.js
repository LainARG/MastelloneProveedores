import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import PortalHomeBody from '../components/portalHomeBody';

const index = 0;

class PortalHomePage extends React.Component{



render(){

return(
<div>
<Navbar index={index} />
<PortalHomeBody></PortalHomeBody>
<Footer/>
</div>
);
}

}

export default PortalHomePage;