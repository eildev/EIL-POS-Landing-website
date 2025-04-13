// main.jsx
import './index.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import RouteConfig from './RouteConfig.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
      <RouteConfig />
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  </StrictMode>,
);
