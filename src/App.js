import React, { Component } from 'react';

import Auditor from './components/Auditor';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auditor children={this.props.children} />
      </div>
    );
  }
}

export default App;
