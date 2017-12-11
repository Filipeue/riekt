import React, { Component } from 'react';
import axios from 'axios';
import Board from './Board';

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            x: 1, // dorobit nacitavanie pozicie z boardu pri refreshnuti stranky
            y: 1,
            board: []
        };
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.makeReq = this.makeReq.bind(this);
        this.getBoard = this.getBoard.bind(this);
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.getBoard(), 1000);
        document.addEventListener('keydown',(event) => {
            console.log(event.keyCode);
            switch(event.keyCode){
                case 37:
                    this.moveLeft();
                    break;
                case 38:
                    this.moveUp();
                    break;
                case 39:
                    this.moveRight();
                    break;
                case 40:
                    this.moveDown();
                    break;
                default:
                    break;
            }
        });
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    getBoard(){
        axios({
            method: 'get',
            url: "http://bciapi.eu-west-1.elasticbeanstalk.com/game/board",
            headers: {
              "Authorization": "Basic " + btoa("riekt_7:riektriekt")
            }
          })
          .then(res => this.setState({board: res.data}))
    }

    moveUp(){
        console.log("Moving up");
        this.setState({x: this.state.x, y: this.state.y-1});
        this.makeReq(this.state.x, this.state.y);
    }

    moveDown(){
        console.log("Moving down");
        this.setState({x: this.state.x, y: this.state.y+1});
        this.makeReq(this.state.x, this.state.y);
    }

    moveLeft(){
        console.log("Moving left");
        this.setState({x: this.state.x-1, y: this.state.y});
        this.makeReq(this.state.x, this.state.y);
    }

    moveRight(){
        console.log("Moving right");
        this.setState({x: this.state.x+1, y: this.state.y});
        this.makeReq(this.state.x, this.state.y);
    }

    makeReq(x,y){
        console.log("Suradnice " + x + " " + y);
        axios({
            method: 'post',
            url: "http://bciapi.eu-west-1.elasticbeanstalk.com/game/bewegen",
            data: {
                    "x": x,
                    "y": y
                },
            headers: {
              "Authorization": "Basic " + btoa("riekt_7:riektriekt")
            }
          }).then(function (response) { console.log(response) })
    }
    render(){
        return(<div>
            <Board board={this.state.board}/>
        </div>);
    }
}

export default Game;