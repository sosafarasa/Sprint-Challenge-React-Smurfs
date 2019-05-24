import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfNav from './components/SmufNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({ smurfs: res.data })
    })
    .catch( err => console.log(err) );
  }

  // add any needed code to ensure that the smurfs collection exists
  // on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  render() {
    return (
      <div className= "app">
        <SmurfNav />
        <Route exact path="/" render={props => (
          <Smurfs smurfs={this.state.smurfs} {...props} />
        )} />
        <Route path="/smurf-form" render={props => (
          <SmurfForm onSubmit={this.update} {...props} />
        )} />
        <Route path="/smurf/:id" render={props => (
          <Smurfs smurfs={this.state.smurfs} {...props} />
        )} />
      </div>
    );
  }



  update = smurfData => {
    this.setState ({ smurfs: smurfData });
  }
}

export default App;
