import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.scss'
//Import all of bootstrap' Javascript
import * as bootstrap from 'bootstrap'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
