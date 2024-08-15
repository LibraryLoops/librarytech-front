import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import { AuthProvider } from './contexts/authContext'
import BookTest from './pages/BookTest'
import Login from './pages/Login'

const routes = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/livros" element={<BookTest />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default routes