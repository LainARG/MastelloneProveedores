import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/loginPage';
import PortalHomePage from '../pages/portalHomePage';
import PortalHomeProvidersPage from '../pages/portalHomeProvidersPage';
import PortalHomeBackofficePage from '../pages/portalHomeBackofficePage';
import PortalHomeInternalUsePage from '../pages/portalHomeInternalUsePage';
import AccountConfiguration from '../pages/accountConfigurationPage';
import ContactPage from '../pages/contactPage';
import KeyFormatPage from '../pages/keyFormatPage';
import KeyFormatPortalPage from '../pages/keyFormatPortalPage';
import KeyForgottenPage from '../pages/keyForgottenPage';
import PortalNewsPage from '../pages/portalNewsPage';
import PaymentsPage from '../pages/paymentsPage';
import DocumentPage from '../pages/documentPage';
import DocumentReportPage from '../pages/documentReportPage';
import DocumentSearchPage from '../pages/documentSearchPage';
import DocumentUploadPage from '../pages/documentUploadPage';
import PaymentsReportPage from '../pages/paymentsReportPage';
import PaymentsReportDetailsPage from '../pages/paymentsReportDetailsPage';
import PaymentsReportNoDetailsPage from '../pages/paymentsReportNoDetailsPage';
import NextPaymentComponent from '../components/nextPaymentComponent';
import PaymentsFormsPage from '../pages/paymentsFormsPage';

class Router extends React.Component{


render(){


return(

<BrowserRouter>
<Switch>
  <Route exact path='/login' component={LoginPage}/>
  <Route exact path='/login/accountkeyformat' component={KeyFormatPage}/>
  <Route exact path='/login/accountkeyforgot' component={KeyForgottenPage}/>
  <Route exact path='/login/accountconfiguration' component={AccountConfiguration}/>
  <Route exact path='/login/contact' component={ContactPage}/>
  <Route exact path='/portal' component={PortalHomePage}/>
  <Route exact path='/portal/providers' component={PortalHomeProvidersPage}/>
  <Route exact path='/portal/backoffice' component={PortalHomeBackofficePage}/>
  <Route exact path='/portal/internaluse' component={PortalHomeInternalUsePage}/>
  <Route exact path='/portal/news' component={PortalNewsPage}/>
  <Route exact path='/portal/format' component={KeyFormatPortalPage}/>
  <Route exact path='/payments' component={PaymentsPage}/>
  <Route exact path='/documents' component={DocumentPage}/>
  <Route exact path='/documents/report' component={DocumentReportPage}/>
  <Route exact path='/documents/search' component={DocumentSearchPage}/>
  <Route exact path='/documents/upload' component={DocumentUploadPage}/>
  <Route exact path='/payments/report' component={PaymentsReportPage}/>
  <Route exact path='/payments/report/detail' component={PaymentsReportDetailsPage} />
  <Route exact path='/test' component={NextPaymentComponent} />
  <Route exact path='/payments/forms' component={PaymentsFormsPage} />
  <Route exact path='/payments/report/nodetail' component={PaymentsReportNoDetailsPage} />
  </Switch>
</BrowserRouter>

	)



}



}
export default Router;