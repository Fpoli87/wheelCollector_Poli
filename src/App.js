import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"El rincon del coleccionista"} />
    </div>
  );
}

export default App;
