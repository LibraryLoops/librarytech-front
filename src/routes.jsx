import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginTest from './pages/LoginTest'
import RegisterTest from './pages/RegisterTest'

const routes = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginTest />} />
        <Route path="/cadastro" element={<RegisterTest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes