import React, { Component } from 'react';
import './Player.css';

class Player extends Component {

    render() {
        return (
            <div className="Player" style={{left: this.props.coordinates.x*45 - 45, top: this.props.coordinates.y*45 - 45}}>
                {(this.props.name === "riekt_7_piece")? <i className="fa fa-user" aria-hidden="true" id="player-avatar" ></i> : <i className="fa fa-user-o" aria-hidden="true" id="player-avatar"></i>}
            </div>
        );
    }
}

export default Player;