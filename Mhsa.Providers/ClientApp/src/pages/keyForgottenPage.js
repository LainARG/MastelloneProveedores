import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Header from '../components/header';
import KeyForgottenBody from '../components/keyForgottenBody';

class KeyForgottenPage extends React.Component{

render(){

return(
<div>
<Header/>
<KeyForgottenBody/>
<Footer/>
</div>
);

}

}
export default KeyForgottenPage;