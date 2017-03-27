import React, { Component }         from 'react';
import data                         from '../../data/pfcls.json'
import Player                       from './players/Player';

export default class Content extends Component {

    constructor(){
        super();
        this.state = {
            message: '',
            totalTours : 5,
            tours: 0,
            players : {
                'Gaby' : {name: 'Gaby', score : 0, choise: null, tours: 0},
                'Jayden': {name:'Jayden', score : 0, choise: null, tours: 0}
            }
        }
    }

    getChoise(value, name){
        let players = this.state.players;

        players[name].choise = value;
        players[name].tours += 1;

        this.setState({players : players});
        this.stopTours();
    }

    stopTours(){
        let players = this.state.players;
        let tours1 = players['Gaby'].tours;
        let tours2 = players['Jayden'].tours;

        if(tours1 == tours2){
            this.setState({tours: this.state.tours += 1});
            this.compareChoise();
        }
    }

    compareChoise(){
        let choise1 = this.state.players['Gaby'].choise;
        let choise2 = this.state.players['Jayden'].choise;
        let message;

        console.log("GABY : " + choise1 + " - VS - " + 'Jayden: ' +choise2)
        if(choise1 == choise2){
            message = 'Vous avez fait le même choix, vous ne gagnez aucune points'
        }
        if(data[choise1][choise2] == 1){
            message = 'Gaby gagne';
        }
        else {
            message = 'Jayden gagne';
        }
        this.setState({message : message});
    }

    render(){
         if(this.state.tours == this.state.totalTours){
            return (
                <div>
                    <h1>FIN du jeu</h1>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div>{this.state.message}</div>
                    <Player key={1} player={this.state.players['Gaby']} getChoise={this.getChoise.bind(this)}/>
                    <Player key={2} player={this.state.players['Jayden']} getChoise={this.getChoise.bind(this)}/>
                </div>
            )
        }
    }
}