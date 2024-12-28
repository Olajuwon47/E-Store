import React from "react";
import Collection from './components/collection.js';
import Newsletter from './components/newletter.js';
import Carousel from './components/Carousel.js';
import Contract from './components/contract.js';
import Nav from './Nav.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
        <Nav/>
        <Collection />
        <Carousel/>
        <Newsletter />
        <Contract/>
        <Footer/>
   </>
  );
}
export default App;
