import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import IuPortalHomeBody from '../components/iuPortalHomeBody';
import CurrentProviderComponent from '../components/currentProviderComponent';

const index = 0;

class IuPortalHomeProvidersPage extends React.Component{



render(){

return(
<div>
<Navbar index={index} />
<CurrentProviderComponent/>
<IuPortalHomeBody></IuPortalHomeBody>
<Footer/>
</div>
);
}

}

export default IuPortalHomeProvidersPage;