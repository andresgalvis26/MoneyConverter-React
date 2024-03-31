import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import CurrencyProvider from './context/CurrencyContext.jsx'; // Importamos el proveedor de contexto de monedas

// Utilizamos ReactDOM.createRoot para renderizar la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Envoltura de la aplicación con el CurrencyProvider */}
        <CurrencyProvider> {/* El componente CurrencyProvider envuelve a la aplicación para proporcionar el contexto relacionado con las monedas */}
            <App /> {/* Componente principal de la aplicación */}
        </CurrencyProvider>
    </React.StrictMode>,
)
