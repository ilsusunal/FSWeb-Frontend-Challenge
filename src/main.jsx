import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import { LangProvider } from './contexts/LangChangeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
        <LangProvider>
            <App />
        </LangProvider>
    </DarkModeProvider>
)
