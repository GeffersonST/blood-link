import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Information from './pages/Information';
import BloodTypes from './pages/BloodTypes';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/bloodtypes" element={<BloodTypes />} />
      </Routes>
    </Router>
  );
};

export default App;
