import React, { Component }         from 'react';

export default class Player extends Component {

    addChoise(e){
        this.props.getChoise(e.target.value, this.props.player.name);
    }



    render() {
        if(this.props.player.display == true){
            return(
                <div className='players'>
                    <h2>{this.props.player.name}</h2>

                    <p>Score: {this.props.player.score}</p>

                    <div className='buttons'>
                        <button onClick={this.addChoise.bind(this)} value='pierre'>Pierre</button>
                        <button onClick={this.addChoise.bind(this)} value='feuille'>Feuille</button>
                        <button onClick={this.addChoise.bind(this)} value='ciseaux'>Ciseaux</button>
                        <button onClick={this.addChoise.bind(this)} value='lezard'>Lezard</button>
                        <button onClick={this.addChoise.bind(this)} value='spock'>Spock</button>
                    </div>
                </div>
        )
        }else {
            return (
                <div></div>
                )
        }
    }
};