import React, { Component }         from 'react';
import data                         from '../../data/pfcls.json'
import Player                       from './players/Player';

export default class Content extends Component {

    constructor(){
        super();
        this.state = {
            players : {
                'Gaby' : {name: 'Gaby', score : 0, choise: null},
                'Jayden': {name:'Jayden', score : 0, choise: null}
            }
        }
    }

    getChoise(value, name){
        let players = this.state.players;

        players[name].choise = value;
        this.setState({players : players})
        console.log(this.state.players)
    }
    
    render(){
        return (
            <div>
                 <Player key={1} player={this.state.players['Gaby']} getChoise={this.getChoise.bind(this)}/>
                 <Player key={2} player={this.state.players['Jayden']} getChoise={this.getChoise.bind(this)}/>
            </div>
        )
    }
}