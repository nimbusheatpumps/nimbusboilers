import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import AreasCovered from './components/AreasCovered';
import Blog from './components/Blog';

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

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<QuoteForm />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/areas" element={<AreasCovered />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <button onClick={() => { throw new Error('Test frontend error'); }}>Trigger Frontend Error</button>
      <Footer />
    </>
  );
}

export default App;
