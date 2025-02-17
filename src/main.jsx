import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PortafolioApp } from './PortafolioApp'
import './styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortafolioApp/>
  </StrictMode>,
)
