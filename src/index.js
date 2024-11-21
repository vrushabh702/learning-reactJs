import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { CounterProvider } from './StateMangement/ReactContextApi/context/Counter';
import AppAddToCart from './StateMangement/ReactContextApi/AddToCart/Components/AppAddToCart';
import { cartProvider } from './StateMangement/ReactContextApi/AddToCart/Context/cart'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <App />
      </CounterProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
