import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import { AuthProvider } from './contexts/authContext'
import Login from './pages/Login'
import BookPage from './pages/BookPage'
import RegisterBook from './pages/RegisterBook'
import ProtectedRoute from './pages/ProtectedRoute'

const routes = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/livros" element={<ProtectedRoute component={BookPage} />} />
          <Route path="/livros/novo" element={<ProtectedRoute component={RegisterBook} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default routes