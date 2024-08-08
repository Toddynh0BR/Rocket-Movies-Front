import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './style/global'

import { Routes } from './Routes'
import { AuthProvider } from './hooks/auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
     <AuthProvider>
       <Routes />
     </AuthProvider>
  </React.StrictMode>
)
