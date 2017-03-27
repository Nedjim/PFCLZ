import React, { Component }         from 'react';

export default class Player extends Component {

    constructor(){
        super();
        this.state = {};

    }

    addChoise(e){
        this.props.getChoise(e.target.value, this.props.player.name);
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <h2>{this.props.player.name}</h2>

                <p>Score: {this.props.player.score}</p>

                <button onClick={this.addChoise.bind(this)} value='pierre'>Pierre</button>
                <button onClick={this.addChoise.bind(this)} value='feuille'>Feuille</button>
                <button onClick={this.addChoise.bind(this)} value='ciseaux'>Ciseaux</button>
                <button onClick={this.addChoise.bind(this)} value='lezard'>Lezard</button>
                <button onClick={this.addChoise.bind(this)} value='spock'>Spock</button>
            </div>
    )
  }
};