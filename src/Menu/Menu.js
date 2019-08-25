import React from 'react';
import './Menu.scss'


class Menu extends React.Component {
    render() {
        return(
            <nav>
                <div className="container nav-container">
                    <a><i className="fas fa-eye"> Logo firmy</i></a>
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