// src/main.jsx или src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// Удаляем ThemeProvider и theme
// import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Убираем ThemeProvider, он больше не нужен */}
    {/* <ThemeProvider theme={theme}> */}
      <CssBaseline /> {/* Можно оставить, он просто сбрасывает базовые стили MUI */}
      <App />
    {/* </ThemeProvider> */}
  </StrictMode>
);
