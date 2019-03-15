import React, { Component } from 'react';
import './App.css'
// import './List'

const list = [
  {
    id: 1,
    name: 'Cardi B'
  },
  {
    id: 2,
    name: 'Nicki Minaj'
  },
  {
    id: 3,
    name: 'Remy Ma'
  },
];

class App extends Component {
  render() {
    return (
      list.map(rapper => 
      <FRapper key={rapper.id}name={rapper.name} />)
  )}
}

class FRapper extends Component {
  render() {
    return <div className="fr-style">{this.props.name}</div>;
  }
}

export default App;
