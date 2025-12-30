import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Admin from './components/Admin';
import Breadcrumb from './components/Breadcrumb';

const QuoteForm = lazy(() => import('./components/QuoteForm'));
const LazyHome = lazy(() => import('./components/Home'));
const LazyFAQ = lazy(() => import('./components/FAQ'));
const LazyAreasCovered = lazy(() => import('./components/AreasCovered'));
const LazyBlog = lazy(() => import('./components/Blog'));
const LazyContact = lazy(() => import('./components/Contact'));
const LazyBoilerMaintenanceTips = lazy(() => import('./components/BoilerMaintenanceTips'));
const LazyGasBoilerServiceScunthorpe = lazy(() => import('./components/GasBoilerServiceScunthorpe'));
const LazyGasBoilerInstallationScunthorpe = lazy(() => import('./components/GasBoilerInstallationScunthorpe'));
const LazyGasBoilerServiceNorthLincolnshire = lazy(() => import('./components/GasBoilerServiceNorthLincolnshire'));
const LazyBoilerRepairScunthorpe = lazy(() => import('./components/BoilerRepairScunthorpe'));
const LazyGasBoilerBreakdownScunthorpe = lazy(() => import('./components/GasBoilerBreakdownScunthorpe'));
const LazyGasSafeBoilerInstallersScunthorpe = lazy(() => import('./components/GasSafeBoilerInstallersScunthorpe'));
const LazyBoilerGrantsScunthorpe = lazy(() => import('./components/BoilerGrantsScunthorpe'));
const LazyGasBoilerServicingScunthorpe = lazy(() => import('./components/GasBoilerServicingScunthorpe'));
const LazyGasBoilerBrandsScunthorpe = lazy(() => import('./components/GasBoilerBrandsScunthorpe'));
const LazySystemBoilerInstallationScunthorpe = lazy(() => import('./components/SystemBoilerInstallationScunthorpe'));
const LazyRegularBoilerInstallationScunthorpe = lazy(() => import('./components/RegularBoilerInstallationScunthorpe'));
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (process.env.REACT_APP_GA_TRACKING_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);
  const isSeoPage = location.pathname === '/gas-boiler-service-scunthorpe' || location.pathname === '/gas-boiler-installation-scunthorpe' || location.pathname === '/gas-boiler-service-north-lincolnshire' || location.pathname === '/gas-boiler-repair-scunthorpe' || location.pathname === '/gas-boiler-breakdown-scunthorpe' || location.pathname === '/system-boiler-installation-scunthorpe' || location.pathname === '/regular-boiler-installation-scunthorpe' || location.pathname === '/boiler-maintenance-tips' || location.pathname === '/gas-safe-boiler-installers-scunthorpe' || location.pathname === '/boiler-grants-scunthorpe' || location.pathname === '/gas-boiler-servicing-scunthorpe' || location.pathname === '/gas-boiler-brands-scunthorpe' || location.pathname === '/areas-covered';

  const canonicalUrl = window.location.origin + window.location.pathname + window.location.search;
return (
  <>
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>

    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:rounded focus:shadow-lg"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <main id="main-content" role="main" tabIndex="-1">
        {!isSeoPage && <Header />}
        <Breadcrumb />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyHome />
            </Suspense>
          } />
          <Route path="/quote" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <QuoteForm />
            </Suspense>
          } />
          <Route path="/faq" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyFAQ />
            </Suspense>
          } />
          <Route path="/areas" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyAreasCovered />
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyBlog />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyContact />
            </Suspense>
          } />
          <Route path="/gas-boiler-service-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyGasBoilerServiceScunthorpe />
            </Suspense>
          } />
          <Route path="/gas-boiler-installation-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyGasBoilerInstallationScunthorpe />
            </Suspense>
          } />
          <Route path="/gas-boiler-service-north-lincolnshire" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyGasBoilerServiceNorthLincolnshire />
            </Suspense>
          } />
          <Route path="/gas-boiler-repair-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyBoilerRepairScunthorpe />
            </Suspense>
          } />
          <Route path="/gas-boiler-breakdown-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyGasBoilerBreakdownScunthorpe />
            </Suspense>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/boiler-maintenance-tips" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyBoilerMaintenanceTips />
            </Suspense>
          } />
          <Route path="/gas-safe-boiler-installers-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyGasSafeBoilerInstallersScunthorpe />
            </Suspense>
          } />
          <Route path="/boiler-grants-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyBoilerGrantsScunthorpe />
            </Suspense>
          } />
          <Route path="/gas-boiler-servicing-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyGasBoilerServicingScunthorpe />
            </Suspense>
          } />
          <Route path="/gas-boiler-brands-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyGasBoilerBrandsScunthorpe />
            </Suspense>
          } />
          <Route path="/system-boiler-installation-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazySystemBoilerInstallationScunthorpe />
            </Suspense>
          } />
          <Route path="/regular-boiler-installation-scunthorpe" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <LazyRegularBoilerInstallationScunthorpe />
            </Suspense>
          } />
        </Routes>
        {!isSeoPage && <Footer />}
      </main>
    </>
  );
}

export default App;
