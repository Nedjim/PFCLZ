import '../assets/stylesheets/index.scss';
import React, { Component }         from 'react';
import Content                      from './content/Content'

export default class App extends Component {
  render() {
    return(
      <div>
          <h1>Pierre - Feuille - Ciseaux - Lézard - Spock</h1>
          <Content />
      </div>
    )
  }
};


