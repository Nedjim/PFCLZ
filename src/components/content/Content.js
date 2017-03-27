import React, { Component }         from 'react';
import data                         from '../../data/pfcls.json'
import Player                       from './players/Player';

export default class Content extends Component {

    constructor(){
        super();
        this.state = {
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
            console.log('Fin du tour');
            this.setState({tours: this.state.tours += 1});
        }
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
                    <Player key={1} player={this.state.players['Gaby']} getChoise={this.getChoise.bind(this)}/>
                    <Player key={2} player={this.state.players['Jayden']} getChoise={this.getChoise.bind(this)}/>
                </div>
            )
        }
    }
}