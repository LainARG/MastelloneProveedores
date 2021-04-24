import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import Body from '../components/portalNewsBody';

class PortalNewsPage extends React.Component{


render(){

return(
<div>
<Navbar/>
<Body></Body>
<Footer/>
</div>
);
}

}

export default PortalNewsPage;