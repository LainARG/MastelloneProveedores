import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import IuDocumentSearchBody from '../components/iuDocumentSearchBody';
import NavbarInternalUser from '../components/navBarInternalUser';

const index = 1;


class DocumentSearchPage extends React.Component{

render(){

return(
<div>
<NavbarInternalUser index={ index }/>
<IuDocumentSearchBody/>
<Footer/>
</div>
);

}

}
export default DocumentSearchPage;


