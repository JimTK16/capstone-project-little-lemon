import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/booking/*" element={<BookingPage />} />
    </Routes>
  )
}

export default App
