import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'rsuite/dist/rsuite-no-reset.min.css';
import "quill/dist/quill.core.css";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

)
