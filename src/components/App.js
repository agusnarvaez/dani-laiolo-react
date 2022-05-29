import '../App.css';
import Header from './Header';

import Home from '../pages/Home.js'
import Projects from '../pages/Projects';
import Project from '../pages/Project';
import NotFound404 from '../pages/NotFound404';
import AboutMe from '../pages/AboutMe'
import Contact from '../pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import React, { useEffect, useState } from "react";


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/projects/list' element={<Projects />} />
        <Route path='/projects/:id' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound404 />} />
        <Route path="/linkedIn" component={() => {
          window.location.href = "https://www.linkedin.com/in/daniela-laiolo-2a4000140/";
          return null;
        }} />
        <Route
          path="/privacy-policy"
          component={() => {
            window.location.replace('https://example.com/1234');
            return null;
          }}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
