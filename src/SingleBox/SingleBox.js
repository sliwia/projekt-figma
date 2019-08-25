import React from 'react';

function SingleBox(props) {
    return (
        <div className={props.classText}>
            <div className="box-content">
                {props.title}
                <span>{props.additionalText}</span>
            </div>
        </div>
    );
}

export default SingleBox;