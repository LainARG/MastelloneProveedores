import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import DocumentBody from '../components/documentBody';
import Navbar from '../components/navBar';
import DocumentsContext from '../contexts/documentsContext';
import PaymentsContext from '../contexts/paymentsContext';
import DigitalDocumentsContext from '../contexts/digitalDocumentsContext ';

const index = 2;

DocumentsContext.allDocuments = async () => { await DocumentsContext.fetchDocuments(); }
DigitalDocumentsContext.allDocuments = async () => { await DigitalDocumentsContext.fetchDocuments(); }
PaymentsContext.allPayments = async () => { await PaymentsContext.fetchPayments(); }

class DocumentPage extends React.Component{
    


    render() {
       

return(
<div>
<Navbar index={index}/>
<DocumentBody/>
<Footer/>
</div>
);

}

}
export default DocumentPage;


