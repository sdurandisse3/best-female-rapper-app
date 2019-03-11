import React, { Component } from 'react';
import './App.css'


class App extends Component {
  render() {
    return (
      <FRapper name="Cardi B"/>
    );
  }
}

class FRapper extends Component {
  render() {
    return <div className="fr-style">{this.props.name}</div>;
  }
}

export default App;
