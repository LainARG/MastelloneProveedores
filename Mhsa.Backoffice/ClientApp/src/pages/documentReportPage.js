import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import DocumentReportBody from '../components/documentReportBody';
import HeaderVoid from '../components/headerVoid';

class DocumentReportPage extends React.Component{

render(){

return(
<div>
<HeaderVoid/>
<DocumentReportBody/>
<Footer/>
</div>
);

}

}
export default DocumentReportPage;


