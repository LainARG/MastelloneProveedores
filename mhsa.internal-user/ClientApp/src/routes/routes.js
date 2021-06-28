import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/loginPage';
import PortalHomeInternalUserPage from '../pages/portalHomeInternalUserPage';
import IuDocumentSearchPage from '../pages/iuDocumentSearchPage';
import Auth from '../auth/auth';
import ProviderSelectInternalUserPage from '../pages/providerSelectInternalUserPage';
import IuPortalHomeProvidersPage from '../pages/iuPortalHomeProvidersPage';
import IuPaymentsReportPage from '../pages/iuPaymentsReportPage';
import ContactPage from '../pages/contactPage';


export default function Router(){

return(

<BrowserRouter>
<Switch>
  <Route exact path='/login' component={LoginPage}/>
  <Route exact path='/auth' component={Auth} />
  <Route exact path='/contact' component={ContactPage} />
  <Route exact path='/portal/internalUser' component={PortalHomeInternalUserPage} />
  <Route exact path='/internalUser/providerSelect' component={ProviderSelectInternalUserPage} />
  <Route exact path='/internalUser/manageDocumentProvider' component={IuDocumentSearchPage} />
  <Route exact path='/internalUser/homePortalProvider' component={IuPortalHomeProvidersPage} />
  <Route exact path='/internalUser/payments' component={IuPaymentsReportPage} />
  </Switch>
</BrowserRouter>

	)







}