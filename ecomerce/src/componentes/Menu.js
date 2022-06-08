import React from 'react';
import '../estilos/Menu.css';
import CartWidget from './cartWidget';

function Menu() {
    return ( 
        <nav className='nav-main'>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contactos</li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default Menu;