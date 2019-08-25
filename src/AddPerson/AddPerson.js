import React from 'react';

function AddPerson(props) {
    return (
        <div className="person">
            <div className="avatar person1"></div>
            <div>
                <h3>
                    {props.title}
                </h3>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    );
}

export default AddPerson;