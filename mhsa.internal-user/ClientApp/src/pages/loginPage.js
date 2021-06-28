import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Body from '../components/loginBody';

const index = 0;

class LoginPage extends React.Component{

render(){

return(
<div>
        <Header index={ index }/>
<Body/>
<Footer/>
</div>
);

}

}
export default LoginPage;


