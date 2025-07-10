import React from "react";
import Store from './pages/store.js'; 
import Cart from './pages/cart.js';
import About from './pages/About.js';
import Orders from './pages/orders.js';
import Track from './pages/track.js';
import Contract from './pages/contract.js';
import { Routes, Route } from "react-router-dom"; 
import Nav from './Nav.js';
import  Home from './pages/Home.js';
import Footer from './Footer.js';
import { CartProvider } from './pages/Cart/cartcontext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <CartProvider>
    <>
      <Nav/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="store" element={<Store/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="About" element={<About/>} />
        <Route path="contract" element={<Contract/>} />
        <Route path="orders" element={<Orders />}/>
        <Route path="track/:orderId" element={<Track />}/>
        {/* <Route path="Login" element={<Login />}/>
        <Route path="Sign up" element={<Signup/>}/>*/}
      </Routes>
      <Footer/>
   </>
   </CartProvider>
  );
}
export default App;


