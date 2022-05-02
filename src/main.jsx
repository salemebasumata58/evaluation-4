import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "./Redux/store"
import {AuthContextProvider } from "./components/contexts/Authcontext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
    <ReduxProvider store={store}>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  
    </ReduxProvider>
   
    </BrowserRouter>
  
  </React.StrictMode>
)
