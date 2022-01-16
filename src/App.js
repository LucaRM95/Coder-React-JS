import './assets/css/App.css';
import Navbar  from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router/AppRouter';
//import CartContext from './components/Context/CartContext';
import CartContextProvider from './components/Context/CartContextProvider';
import Footer from './components/Footer';


function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <AppRouter />
          <Footer />
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
