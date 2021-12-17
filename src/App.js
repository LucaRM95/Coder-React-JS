import './assets/css/App.css';
import Navbar  from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
//import AppRouter from './Router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
