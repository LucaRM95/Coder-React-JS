import './assets/css/App.css';
import Navbar  from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';
//import CartContext from './components/Context/CartContext';
import CartContextProvider from './components/Context/CartContextProvider';

function App() {
  return (
    <CartContextProvider value="algo">
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
