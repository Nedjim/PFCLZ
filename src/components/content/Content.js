import React, { Component }         from 'react';
import data                         from '../../data/pfcls.json'
import Player                       from './players/Player';

export default class Content extends Component {

    constructor(){
        super();
        this.state = {
            players : [
                {name : 'Zauguidou', score: 0, choix: null}, 
                {name : 'Nedjim', score: 0, choix: null}
            ]
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.players.map((player, index) => {
                        return(
                            <Player key={index} player={player} />
                        )
                    })
                }
            </div>
        )
    }
}