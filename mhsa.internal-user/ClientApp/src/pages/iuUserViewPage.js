import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import InternalUserView from '../components/internalUserView';

const index = 0;

class ProviderUserViewPage extends React.Component{



render(){

return(
<div>
<Navbar index={index} />
 <InternalUserView /> 
<Footer/>
</div>
);
}

}

export default ProviderUserViewPage;