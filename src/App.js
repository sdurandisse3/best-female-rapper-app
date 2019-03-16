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

  state = {
    rappers: [],
  };

  componentDidMount() {
    this.setState({ rappers: list });
  }


  handleEvent = (e) => console.log('button clicked '+e);

  render() {
    return (
      list.map(rapper => 
      <FRapper key={rapper.id} id={rapper.id} name={rapper.name} onVote={this.handleEvent} votes={rapper.votes}/>)
  )}
}

class FRapper extends Component {

 handleClick = () => {
//  console.log('button clicked '+ e.target)
this.props.onVote(this.props.name);
 }

  render() {
    return <div className="fr-style">{this.props.name} <button onClick={this.handleClick} >+</button> {this.props.votes} </div>;
  }
}

export default App;
