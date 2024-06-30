import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shopcontextprovider from './context/Storecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Shopcontextprovider>
    <App />
  </Shopcontextprovider>
  
)
