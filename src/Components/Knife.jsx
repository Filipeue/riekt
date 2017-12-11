import React, { Component } from 'react';
import './Knife.css';


class Knife extends Component {

    render() {
        return (
            <div className="Knife" style={{left: this.props.coordinates.x*45 - 45, top: this.props.coordinates.y*45 - 45}}>
                <i className="fa fa-cutlery" aria-hidden="true" id="iconka"></i>
            </div>
        );
    }
}

export default Knife;