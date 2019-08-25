import React from 'react';
import './Home.scss'


class Home extends React.Component {
    render() {
        return(
            <section id="home">
                <div className="container home-container">
                    <div className="home-text">
                        <h1>Nasza firma oferuje najwyższej<br />jakości produkty</h1>
                        <h2>Nie wierz nam na słowo - sprawdź !</h2>
                        <a href="#offer"><button className="button-offer">Oferta</button></a>
                    </div>
                </div>
          </section>    
        );
    }
}

export default Home;