import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NoticesBody from '../components/noticesBody';
import Navbar from '../components/navBar';


const index = 4;


class NoticesPage extends React.Component{
    
render() {
       

return(
<div>
<Navbar index={index}/>
<NoticesBody/>
<Footer/>
</div>
);

}

}
export default NoticesPage;


