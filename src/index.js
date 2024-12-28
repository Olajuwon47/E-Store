import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Store from './pages/store.js'; 
import Cart from './pages/cart.js';
//import Orders from './pages/orders.js';
//import Track from './pages/track.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Login/Sign up.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './pages/Cart/cartcontext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
 <CartProvider>
   <BrowserRouter>
         <Routes>
             <Route path="/" element={<App />} />
             <Route path="store" element={<Store/>}/>
            <Route path="cart" element={<Cart/>}/>
            {/*<Route path="/orders" element={<Orders />}/>
            <Route path="/track" element={<Track />}/>*/}
            <Route path="Login" element={<Login />}/>
            <Route path="Sign up" element={<Signup/>}/>
         </Routes>
   </BrowserRouter>
 </CartProvider>
</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

  

