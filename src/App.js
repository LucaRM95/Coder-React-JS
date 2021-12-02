import './assets/css/App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar  from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer marginTop="mt-5" greeting="Esta será la lista de productos"/>
    </div>
  );
}

export default App;
