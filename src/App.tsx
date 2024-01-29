import { AboutUs, Generator, PageNotFound, Unlock } from 'pages';
import {
  AxiosInterceptorContext,
  DappProvider,
  Layout,
} from 'components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  apiTimeout,
  environment,
  sampleAuthenticatedDomains,
  walletConnectV2ProjectId
} from 'config/config.mainnet';

import { BatchTransactionsContextProvider } from 'wrappers';
import { RouteNamesEnum } from 'localConstants';
import { routes } from 'routes';

const AppContent = () => {
  return (
    <DappProvider
      environment= { environment }
  customNetworkConfig = {{
    name: 'customConfig',
      apiTimeout,
      walletConnectV2ProjectId
  }
}
dappConfig = {{
  shouldUseWebViewProvider: true,
    logoutRoute: RouteNamesEnum.unlock
}}
      
    >
  <AxiosInterceptorContext.Listener>
  <Layout>
  <Routes>
  <Route path={ RouteNamesEnum.unlock } element = {< Unlock />} />
    < Route path = "/about" element = {< AboutUs />} />
      < Route path = "/generator" element = {< Generator />} />

{
  routes.map((route) => (
    <Route
                path= { route.path }
                key = {`route-key-'${route.path}`}
element = {< route.component />}
/>
            ))}
<Route path='*' element = {< PageNotFound />} />
  < /Routes>
  < /Layout>
  < /AxiosInterceptorContext.Listener>
  < /DappProvider>
  );
};

export const App = () => {
  return (
    <AxiosInterceptorContext.Provider>
    <AxiosInterceptorContext.Interceptor
        authenticatedDomains= { sampleAuthenticatedDomains }
    >
    <Router>
    <BatchTransactionsContextProvider>
    <AppContent />
    < /BatchTransactionsContextProvider>
    < /Router>
    < /AxiosInterceptorContext.Interceptor>
    < /AxiosInterceptorContext.Provider>
  );
};
