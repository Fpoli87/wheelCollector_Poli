import './App.css';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/NavBar';
import Titulo from './components/Titulo'


function App() {
  return (
  <div className="App d-flex flex-column vh-100">
        
    <Navbar />
    <Titulo greeting={"El rincon del coleccionista"} />
    <Outlet />

    <Footer />
            
  </div>
    
  );
}

export default App;
