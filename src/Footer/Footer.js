import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="container footer-container">
                    <span>Nazwa firmy, wszelkie prawa zastrzeżone, 2019</span>
                    <div >
                        <FontAwesomeIcon icon={ faFacebook } />
                        <FontAwesomeIcon icon={ faInstagram } />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;