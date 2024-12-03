//import { BrowserRouter } from 'react-router-dom';
import Nav from './nav.js';
import Footer from './components/Footer.js';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <div>
      <Nav />
      <Footer />
    </div>
    </ErrorBoundary>

  );
}

export default App;
