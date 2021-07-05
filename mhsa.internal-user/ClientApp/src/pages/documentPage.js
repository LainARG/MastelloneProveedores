import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import DocumentBody from '../components/documentBody';
import Navbar from '../components/navBar';
import CurrentProviderComponent from '../components/currentProviderComponent';

const index = 2;


class DocumentPage extends React.Component{
    
render() {
       

return(
<div>
<Navbar index={index} />
<CurrentProviderComponent className="iuPaymentsReportPage" />
<DocumentBody/>
<Footer/>
</div>
);

}

}
export default DocumentPage;


