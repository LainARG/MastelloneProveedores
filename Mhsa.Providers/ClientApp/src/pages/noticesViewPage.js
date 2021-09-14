import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NoticesView from '../components/noticesView';
import Navbar from '../components/navBar';


const index = 4;


class NoticesViewPage extends React.Component{
    
render() {
       

return(
<div>
<Navbar index={index}/>
<NoticesView/>
<Footer/>
</div>
);

}

}
export default NoticesViewPage;


