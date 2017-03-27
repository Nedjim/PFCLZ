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
                'Gaby' : {name: 'Gaby', score : 0, choise: null, tours: 0, display: true},
                'Jayden': {name:'Jayden', score : 0, choise: null, tours: 0, display: false}
            }
        }
    }

    changeDisplay(){
        let players = this.state.players;

        players['Gaby'].display = !players['Gaby'].display;
        players['Jayden'].display = !players['Jayden'].display;
    }

    getChoise(value, name){
        let players = this.state.players;

        players[name].choise = value;
        players[name].tours += 1;
        
        this.setState({players : players});
        this.changeDisplay();
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
        let players = this.state.players;
        let choise1 = players['Gaby'].choise;
        let choise2 = players['Jayden'].choise;
        let message;

        if(choise1 == choise2){
            message = 'Vous avez fait le même choix, vous ne gagnez aucun points sur la dernière partie'
        }
        else if(data[choise1][choise2] == 1){
            message = 'Gaby gagne la dernière partie';
            players['Gaby'].score += 1;
        }
        else {
            message = 'Jayden gagne la dernière partie';
            players['Jayden'].score += 1;
        }
        this.setState({
            message : message,
            players : players
        });
    }

    end(){
        if(this.state.players['Gaby'].score > this.state.players['Jayden'].score){
            return (
                <div  className='winner'>
                    Gaby gagne la partie
                </div>
            )
        }
        else if(this.state.players['Gaby'].score == this.state.players['Jayden'].score){
            return (
                <div  className='winner'>
                    Egalité
                </div>
            )
        }
        else {
            return (
                <div className='winner'>
                    Jayden gagne la partie
                </div>
            )
        }
        
    }

    render(){
         if(this.state.tours == this.state.totalTours){
            return (
                <div id="end">
                    <h1>FIN DU JEU</h1>
                    <div className='score'>
                        {this.end()}
                        <p>Gaby : {this.state.players['Gaby'].score}</p>
                        <p>Jayden : {this.state.players['Jayden'].score}</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id='content'>
                    <div>
                        Tours: {this.state.tours} / {this.state.totalTours} 
                    </div>
                    <div className='score'>
                        <p>Gaby: {this.state.players['Gaby'].score} - Jayden :  {this.state.players['Jayden'].score} </p>
                    </div>
                    <Player key={1} player={this.state.players['Gaby']} getChoise={this.getChoise.bind(this)}/>
                    <Player key={2} player={this.state.players['Jayden']} getChoise={this.getChoise.bind(this)}/>
                    <div className='message'>{this.state.message}</div>
                </div>
            )
        }
    }
}