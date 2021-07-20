import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import DocumentUploadBody from '../components/documentUploadBody';
import Navbar from '../components/navBar';

const index = 2;

class DocumentUploadPage extends React.Component{

render(){

return(
<div>
<Navbar index={index} />
<DocumentUploadBody/>
<Footer/>
</div>
);

}

}
export default DocumentUploadPage;


