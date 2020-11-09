import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Flow', age: 26 },
      { name: 'Mircea', age: 27 },
      { name: 'Liorcea', age: 29 },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>TE DREQ FIRST REACT APaP</h1>
        <button>Switch names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > SMECHER </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );

    // return React.createElement(
    //   'div',
    //   {className:'App'},
    //   React.createElement('h1', null, 'TeDREq')
    // );
  }
}

export default App;
