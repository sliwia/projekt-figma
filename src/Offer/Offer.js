import React from 'react';
import './Offer.scss'
import SingleBox from './SingleBox/SingleBox'

class Offer extends React.Component {
    constructor(props){
        super(props);
        this.offerList = [
            {
                offerName: "Usługa 1",
                additionalText: "(nowość)",
                redDot: true
            },
            {
                offerName: "Usługa 2",
                additionalText: "",
                redDot: false
            },
            {
                offerName: "Usługa 3",
                additionalText: "(nowość)",
                redDot: true
            },
            {
                offerName: "Usługa 4",
                additionalText: "(nowość)",
                redDot: true
            
            },
            {
                offerName: "Usługa 5",
                additionalText: "",
                redDot: false
            },
            {
                offerName: "Usługa 6",
                additionalText: "(nowość)",
                redDot: true
            }
        ]
    }
    render() {
        return(
            <section id="offer">
                <div className="container">
                    <h1>Czym zajmuje się nasza firma ?</h1>

                    <div className="box-container">
                        { this.offerList.map((offer,idx) => { return(< SingleBox box={offer} key={idx} />)})}
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Offer;