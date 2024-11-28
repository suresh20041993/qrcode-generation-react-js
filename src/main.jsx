import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import "./css/qrcode.css"
import QrCode from './components/QrCode.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <QrCode></QrCode>
  </StrictMode>
)
