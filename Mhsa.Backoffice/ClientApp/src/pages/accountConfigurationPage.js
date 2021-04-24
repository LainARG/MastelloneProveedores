import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import Header from '../components/header';
import AccountConfigurationBody from '../components/accountConfigurationBody';

class AccountConfiguration extends React.Component{

render(){

return(
<div>
<Header/>
<AccountConfigurationBody/>
<Footer/>
</div>
);

}

}
export default AccountConfiguration;