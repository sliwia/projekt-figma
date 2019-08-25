import React from 'react';
import './Offer.scss'
import SingleBox from '../SingleBox/SingleBox'


class Offer extends React.Component {
    render() {
        return(
            <section id="offer">
                <div className="container">
                    <h1>Czym zajmuje się nasza firma ?</h1>

                    <div className="box-container">
                        <SingleBox classText="box-new single-box" title="Usługa 1" additionalText="(nowość)"/>
                        <SingleBox classText="single-box" title="Usługa 2" />
                        <SingleBox classText="single-box" title="Usługa 3" />
                        <SingleBox classText="single-box" title="Usługa 4" />
                        <SingleBox classText="single-box" title="Usługa 5" />
                        <SingleBox classText="single-box" title="Usługa 5" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Offer;