import React from 'react';
import './Footer.scss'


class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="container footer-container">
                    <span>Nazwa firmy, wszelkie prawa zastrzeżone, 2019</span>
                    <div >
                        <i className="fab fa-instagram fa-1.7x"></i>
                        <i className="fab fa-facebook-square fa-1.7x"></i>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;