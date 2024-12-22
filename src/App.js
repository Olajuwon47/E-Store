import React from "react";
import Store from './pages/store.js'; 
import Cart from './pages/cart.js';
//import Orders from './pages/orders.js';
//import Track from './pages/track.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Login/Sign up.js';
import Collection from './components/collection.js';
//import Team from './components/team.js';
import Newsletter from './components/newletter.js';
import Carousel from './components/Carousel.js';
import Contract from './components/contract.js';
import Nav from './Nav.js';
//import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './pages/Cart/cartcontext.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <Nav/>
        <Routes>
        <Route  >
        <Route path="/store" element={<Store/>} />
        <Route path="/cart" element={<Cart/>} />
         {/*<Route path="/orders" element={<Orders />} />
        <Route path="/track" element={<Track />} />*/}
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign up" element={<Signup/>} />
      </Route>
      </Routes>
        <Collection />
        <Carousel/>
        <Newsletter />
        <Contract/>
        <Footer/>
     </CartProvider>
     </BrowserRouter>
   </>
  );
}
export default App;
