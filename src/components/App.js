import '../assets/stylesheets/index.scss';
import React, { Component }         from 'react';
import Content                      from './content/Content';
//import Notice                       from './notice/Notice';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      notice: false,
      buttonValue: 'Afficher / Masquer les règles'
    }
  }

  showNotice(){
    this.setState({ notice: !this.state.notice});
  }
  
  render() {
    return(
      <div>
          <header>
              <h1>Pierre - Feuille - Ciseaux - Lézard - Spock</h1>
          </header>
          <Content />
          <div id='notice'>
              <p> Un trou de mémoire?</p>
              <button onClick={this.showNotice.bind(this)}>{this.state.buttonValue}</button>
              
          </div>
      </div>
    )
  }
};


