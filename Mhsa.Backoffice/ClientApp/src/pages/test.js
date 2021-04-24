import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Test from '../components/test';
import Navbar from '../components/navBar';

class LoginPage extends React.Component{

render(){

return(
<div>
<Navbar/>
<Test/>
<Footer/>
</div>
);

}

}
export default LoginPage;


