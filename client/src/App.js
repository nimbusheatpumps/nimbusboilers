import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<QuoteForm />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/areas" element={<AreasCovered />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
