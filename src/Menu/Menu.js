import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './Menu.scss'

class Menu extends React.Component {
    render() {
        return(
            <nav>
                <div className="container nav-container">
                    <a><FontAwesomeIcon icon={faEye} /> Firma</a>
                    <div className="nav--links">
                        <a href="#about">O nas</a>
                        <a href="#offer">Oferta</a>
                        <a>Kontakt</a>
                    </div>
                    <button className="nav--toggler"></button>
                </div>
            </nav>
        );
    }
}

export default Menu;