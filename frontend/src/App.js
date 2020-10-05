import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
    <div className='grid-container'>
            <header className='header'>
                <div className='brand'>
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <a href='index.html'>Amadeo</a>
                </div>
                <div className='header-links'>
                    <a href='carrito.html'>Carrito</a>
                    <a href='registrate.html'>Registrate</a>
                </div>
            </header>
            <aside className='sidebar'>
                <h3>Categorías</h3>
                <buton className='sidebar-close-button' onClick={closeMenu}>
                    <img className='flecha' src='/imagenes/flecha.png' ult='cerrar' />
                </buton> 
                <ul>
                    <li><a href='index.html'>Cereales</a></li>
                    <li><a href='index.html'>Frutos secos</a></li>
                    <li><a href='index.html'>Legumbres</a></li>
                    <li><a href='index.html'>Condimentos</a></li>
                </ul>
            </aside>
            <main className='main'>
                <div className='content'>
                    <ul className='products'>
                        <li>
                            <div className='product'>
                                <img className='product-image' src='/imagenes/d1.jpg' alt='producto' />
                                <div className='product-name'>
                                    <a href='product.html'>Arroz</a>
                                </div>
                                <div className='product-brand'></div>
                                <div className='product-price'>$80</div>
                            </div>
                        </li>
                    </ul> 
                </div>
            </main>
            <footer className='footer'>
                2020 Amadeo Almacén Natural
            </footer>
        </div>
  );
}

export default App;
