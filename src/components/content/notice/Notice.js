import React, { Component }         from 'react';

export default class Notice extends Component {

  render() {
      if(this.props.status){
        return(
            <div className='rules'>
                    <li>Les ciseaux coupent le papier</li>
                    <li>Le papier bat la pierre</li>
                    <li>La pierre écrase le lézard</li>
                    <li>Le lézard empoisonne Spock</li>
                    <li>Spock écrabouille les ciseaux</li>
                    <li>Les ciseaux décapitent le lézard</li>
                    <li>Le lézard mange le papier</li>
                    <li>Le papier repousse Spock</li>
                    <li>Spock détruit la pierre</li>
                    <li>La pierre bat les ciseaux</li>
            </div>
        )
      }
      else {
          return <div></div>
      }
  }
};


