import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Labs from './Pages/Labs';
import Publications from './Pages/Publications'
import About from './Pages/About'

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Labs" element={<Labs />} />
      <Route path="/Publications" element={<Publications />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Footer/>
  </Router>,

  document.getElementById("root")
);


