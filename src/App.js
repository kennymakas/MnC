import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WomenIssues from './components/WomenIssues';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <FloatingButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/women" element={<WomenIssues />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
