import React, { Component }         from 'react';

export default class Player extends Component {
  render() {
    return(
      <div>
          <h2>{this.props.player.name}</h2>
          <p>Score: {this.props.player.score}</p>
          
          <button>Pierre</button>
          <button>Feuille</button>
          <button>Ciseaux</button>
          <button>Lezard</button>
          <button>Spock</button>
      </div>
    )
  }
};