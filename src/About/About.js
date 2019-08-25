import React from 'react';
import { Persons } from './Persons.json';
import AddPerson from '../AddPerson/AddPerson'
import './About.scss';


class About extends React.Component {
    render() {
        return(
            
            <section id="about">
                <div className="container">
                    <h1 className="title-specialists">Nasi specjaliści</h1>
                    {    
                        Object.entries(Persons)
                        .map((aboutValue,index) =>{
                            console.log(aboutValue);
                          return <AddPerson title={aboutValue[1].title} description={aboutValue[1].description} />;
                        })
                    }
                </div>
            </section>
        );
    }
}

export default About;