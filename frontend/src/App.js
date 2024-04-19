import React from 'react';
import { Routes, Route } from "react-router-dom";
import ContactForm from "./Pages/ContactForm";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import CelticSeaSalt from './Pages/CelticSeaSalt'
import GuerandaisSeaSalt from './Pages/GuerandaisSeaSalt';
import Card from './components/Card';
import products from './assets/db/products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} exact />
        <Route path="/contact-us" element={<ContactForm />} exact />
        <Route path="/contact" element={<ContactForm />} exact />
        <Route path="/brand/celtic-sea-salt" element={<CelticSeaSalt />} exact />
        <Route path="/brand/le Guerandais sea salt" element={<GuerandaisSeaSalt />} exact />
        <Route path='*' element={<Card props={products} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
