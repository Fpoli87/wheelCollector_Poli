import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Productos from './pages/product';
import Nosotros from './pages/nosotros';
import { 
  BrowserRouter, 
  Route,
  Switch,
  Routes, 
} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import ItemDetail from './components/ItemDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:id" element={<ItemDetail />} />
          <Route path="nosotros" element={<Nosotros />}/>
        </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
