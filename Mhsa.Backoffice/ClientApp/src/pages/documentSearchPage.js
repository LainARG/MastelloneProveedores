import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import DocumentSearchBody from '../components/documentSearchBody';
import Navbar from '../components/navBar';

class DocumentSearchPage extends React.Component{

render(){

return(
<div>
<Navbar/>
<DocumentSearchBody/>
<Footer/>
</div>
);

}

}
export default DocumentSearchPage;


