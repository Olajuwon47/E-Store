import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Nav from './nav.js';
import Footer from './components/Footer.js';
import Store from './pages/store.js'; 
import Cart from './pages/cart.js';
//import Orders from './pages/orders.js';
//import Track from './pages/track.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Login/Sign up.js';
import Currency from './pages/Currency.js';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/store" element={<Store/>} />
        <Route path="/cart" element={<Cart/>} />
         {/*<Route path="/orders" element={<Orders />} />
        <Route path="/track" element={<Track />} />*/}
        <Route path="/Login" element={<Login/>} />
        <Route path="/Sign up" element={<Signup/>} />
        <Route path="/ Currency" element={< Currency/>} />
      </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
