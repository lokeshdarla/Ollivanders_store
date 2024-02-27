import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from '@/context/userContextProvider'
import { CartProvider } from '@/context/cartContextProvider'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
