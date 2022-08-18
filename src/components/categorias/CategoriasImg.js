import React from 'react';
import { Link } from 'react-router-dom';
import Categorias from '../Categorias.js'
import './categoriasImg.css'

const CategoriasImg = () => {


  return (
        <div>
                        
            <div className='categorias categoria-img-rel'>
                <Link to="/categorias/Reliquias"><a href="#cat"> Reliquias</a></Link>
            </div>
            <div className='categorias categoria-img-mil'>
                <Link to="/categorias/Militaria"  >Militaria</Link>
            </div>
            <div className='categorias categoria-img-cris'>
                <Link to="/categorias/Cristaleria"  >Cristaleria</Link>
            </div>
            <div className='categorias categoria-img-esc'>
                <Link to="/categorias/Esculturas" >Esculturas</Link>
            </div>
            <br/>
            <a id='cat'/>
            <Categorias/>
            

        </div>

        );

}

export default CategoriasImg