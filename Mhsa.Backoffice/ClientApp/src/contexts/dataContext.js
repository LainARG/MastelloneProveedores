import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import DocumentsContext from './documentsContext';
import PaymentsContext from './paymentsContext';
import DigitalDocumentsContext from './digitalDocumentsContexts';




DocumentsContext.allDocuments = async () => { await DocumentsContext.fetchDocuments(); }
DigitalDocumentsContext.allDigitalDocuments = async () => { await DigitalDocumentsContext.fetchDocuments(); }
PaymentsContext.allPayments = async () => { await PaymentsContext.fetchPayments(); }



class GlobalContext extends React.Component {}

export default GlobalContext;