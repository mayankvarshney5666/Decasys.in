import React from 'react';
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} exact />
        <Route path="/contact-us" element={<ContactForm />} exact />
        <Route path="/contact" element={<ContactForm />} exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
