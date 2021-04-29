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
  <Route exact path='/documents/report' component={DocumentReportPage} />
  </Switch>
</BrowserRouter>



	)



}



}
export default Router;