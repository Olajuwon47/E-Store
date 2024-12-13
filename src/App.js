import Collection from './components/collection.js';
//import Team from './components/team.js';
import Newsletter from './components/newletter.js';
import Carousel from './components/Carousel.js';
import Contract from './components/contract.js';
import Home from './home.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './pages/Cart/cartcontext.js';


 
function App() {
  
  return (
    <>
      <CartProvider> 
        <Home />
        <Collection />
        <Carousel/>
        <Newsletter />
        <Contract/>
        <Footer/>
     </CartProvider>
   </>
  );
}
export default App;
