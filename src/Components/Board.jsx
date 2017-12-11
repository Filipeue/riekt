import React, { Component } from 'react';
import './Board.css';
import Player from './Player'

class Board extends Component {

  constructor() {
    super();
    this.generatePiles = this.generatePiles.bind(this);
  }

  generatePiles() { // dorobit vykreslovanie comp. Knife
    return this.props.board.map((pile, i) => {
      let coordinates = {
        x: pile.position.data.x,
        y: pile.position.data.y
      }
      return pile.pieces.map((player, i) => {
        console.log("Player: ", player);
        console.log("COOrdinacie: ", coordinates);        
        return (<Player coordinates={coordinates} name={player.name} key={i}/>)
      })
    })
  }

  render() {
    return (
      <div className="Board">
        <img src="/pics/board.png" alt="board" id="grid" />
        {this.generatePiles()}
      </div>
    );
  }
}

export default Board;