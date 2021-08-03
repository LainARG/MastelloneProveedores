import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import PortalHomeInternalUserPage from "../pages/portalHomeInternalUserPage";
import IuDocumentSearchPage from "../pages/iuDocumentSearchPage";
import Auth from "../auth/auth";
import ProviderSelectInternalUserPage from "../pages/providerSelectInternalUserPage";
import IuPortalHomeProvidersPage from "../pages/iuPortalHomeProvidersPage";
import IuPaymentsReportPage from "../pages/iuPaymentsReportPage";
import ProviderUserViewPage from "../pages/providerUserViewPage";
import ProviderUserPendingViewPage from "../pages/providerUserPendingViewPage";
import iuUserViewPage from "../pages/iuUserViewPage";
import ContactPage from "../pages/contactPage";
import DocumentPage from "../pages/documentPage";
import BackofficeUserPage from "../pages/backofficeUserPage"
import BackofficeStatisticsPage from "../pages/backofficeStatisticsPage"
import BackofficeAreasPage from "../pages/backofficeAreasPage"

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/documents" component={DocumentPage} />
        <Route
          exact
          path="/portal/internalUser"
          component={PortalHomeInternalUserPage}
        />
        <Route
          exact
          path="/internalUser/providerSelect"
          component={ProviderSelectInternalUserPage}
        />
        <Route
          exact
          path="/internalUser/manageDocumentProvider"
          component={IuDocumentSearchPage}
        />
        <Route
          exact
          path="/internalUser/homePortalProvider"
          component={IuPortalHomeProvidersPage}
        />
        <Route
          exact
          path="/backoffice/providerUser"
          component={ProviderUserViewPage}
        />
        <Route
          exact
          path="/backoffice/providerUserPending"
          component={ProviderUserPendingViewPage}
        />
        <Route
          exact
          path="/backoffice/internalUser"
          component={iuUserViewPage}
        />
        <Route
          exact
          path="/backoffice/users"
          component={BackofficeUserPage}
        />
        <Route
          exact
          path="/backoffice/statistics"
          component={BackofficeStatisticsPage}
        />
        <Route
          exact
          path="/backoffice/areas"
          component={BackofficeAreasPage}
        />
        <Route
          exact
          path="/internalUser/payments"
          component={IuPaymentsReportPage}
        />
      </Switch>
    </BrowserRouter>
  );
}
