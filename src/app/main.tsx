import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // estilos globales (Tailwind cargado aquí)
import App from './App';

// Creamos el root para React 18+ y renderizamos la app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
