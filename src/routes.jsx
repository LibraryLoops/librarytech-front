import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginTest from './pages/LoginTest'
import RegisterTest from './pages/RegisterTest'
import { AuthProvider } from './contexts/authContext'
import BookTest from './pages/BookTest'

const routes = () => {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginTest />} />
          <Route path="/cadastro" element={<RegisterTest />} />
          <Route path="/livros" element={<BookTest />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default routes