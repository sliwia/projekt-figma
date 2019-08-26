import React from 'react';

class SingleBox extends React.Component {
    constructor(props) {
        super(props);
    } 
    // ?? nie jestem pewna czy to jest dobry pomysł:
    addRedDot() {
        if (this.props.box.redDot) {
            return "box-new single-box";
        } else {
            return "single-box";
        }
    }

    addAdditionalText() {
        if (this.props.box.additionalText !=="") return <span>{this.props.box.additionalText}</span>
    }

    render(){
        return (
            <div className={ this.addRedDot() }>
                <div className="box-content">
                    { this.props.box.offerName }
                    { this.addAdditionalText() }
                </div>
            </div>
        ); 
    }
}

export default SingleBox;