import React, { Component } from 'react';
import './App.css'

const list = [
  {
    id: 1,
    name: 'Cardi B',
    votes: 0
  },
  {
    id: 2,
    name: 'Nicki Minaj',
    votes: 0
  },
  {
    id: 3,
    name: 'Remy Ma',
    votes: 0
  },
];

class App extends Component {
// handleOnClick = (e) => {
// console.log('button clicked')
// }

  render() {
    return (
      list.map(rapper => 
      <FRapper key={rapper.id}name={rapper.name} />)
  )}
}

class FRapper extends Component {

   handleClick = (e) => {
     console.log('button clicked')
   }

  render() {
    return <div className="fr-style">{this.props.name} <button onClick={this.handleClick} >+</button></div>;
  }
}

export default App;
