import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/landing/HomePage.jsx'
import AboutPage from "./pages/about/AboutPage.jsx"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
