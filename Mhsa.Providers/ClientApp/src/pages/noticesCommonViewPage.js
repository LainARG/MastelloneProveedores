import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import CommonNoticesView from '../components/commonNoticesView';
import Navbar from '../components/navBar';


const index = 4;


class NoticesCommonViewPage extends React.Component{
    
render() {
       

return(
<div>
<Navbar index={index}/>
<CommonNoticesView/>
<Footer/>
</div>
);

}

}
export default NoticesCommonViewPage;


