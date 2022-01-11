import './assets/css/App.css';
import Navbar  from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router/AppRouter';
//import CartContext from './components/Context/CartContext';
import CartContextProvider from './components/Context/CartContextProvider';


function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <AppRouter />
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
