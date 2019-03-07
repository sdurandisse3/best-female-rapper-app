import React, { Component } from 'react';
import './App.css'


class App extends Component {
  render() {
    return (
      <FRapper />
    );
  }
}

class FRapper extends Component {
  render() {
    return <div className="txt-color">Hello, World!</div>;
  }
}

export default App;
