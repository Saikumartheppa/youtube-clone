import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FAVICON from "./assets/youtube_favicon.png";
const link = document.createElement('link');
link.rel = 'icon';
document.head.appendChild(link);
link.href = FAVICON;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
