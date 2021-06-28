import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import DocumentUploadBody from '../components/documentUploadBody';
import Navbar from '../components/navBar';

class DocumentUploadPage extends React.Component{

render(){

return(
<div>
<Navbar/>
<DocumentUploadBody/>
<Footer/>
</div>
);

}

}
export default DocumentUploadPage;


