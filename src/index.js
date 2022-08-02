import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './Context/CartContext';
import Productos from './pages/product';
import Nosotros from './pages/nosotros';
import Home from './pages/home';
import Categorias from './pages/categorias';
import ProdCat from './pages/prodcat';
import Carrito from './pages/carrito';
import './Firebase/firebase'

import { 
  BrowserRouter, 
  Route,
  Routes, 
} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Prodetail from './pages/prodetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} >
            <Route path="categorias" element={<Categorias />}>
              <Route path=':category' element={<ProdCat />}/>
            </Route> 
            <Route path='productos' element={<Productos />}/>
            <Route path="productos/:id" element={<Prodetail />} />
            <Route path="nosotros" element={<Nosotros />}/>
            <Route path='carrito' element={<Carrito />}/>
            <Route path='*' element={<Home />}/>
            <Route index element={<Home />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
