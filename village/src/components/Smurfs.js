import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs">
        <h1>Smurf Village</h1>
        <ul>
        {this.props.smurfs.filter(smurf => {
            let matchId = this.props.match.params.id;
            if (matchId === undefined) { return true;}
            matchId = Number(matchId);
            if (matchId === smurf.id) { return true;}
          }).map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
