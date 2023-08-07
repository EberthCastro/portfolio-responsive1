import React from 'react'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import NBar from '../components/NBar'

import { Route, Routes } from "react-router-dom";
  
function RoutesPortf() {
  return (
    <div className="container">
  <NBar />
  <Routes>
    <Route path="/" element={<Banner />} />
    <Route path="/Projects" element={<Projects />} />
    <Route path="/Skills" element={<Skills />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes>
</div>
  )
}

export default RoutesPortf
