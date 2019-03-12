import React, { Component } from 'react';
import './App.css'
// import './List'

const list = [
  {
    name: 'Cardi B'
  },
  {
    name: 'Nicki Minaj'
  },
  {
    name: 'Remy Ma'
  },
];

class App extends Component {
  render() {
    // const rapper = list;
    return (
      list.map(rapper => 
      <FRapper name={rapper.name} />)
  )}
}

class FRapper extends Component {
  render() {
    return <div className="fr-style">{this.props.name}</div>;
  }
}

export default App;
