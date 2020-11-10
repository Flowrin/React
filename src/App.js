import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Flow',
  };

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="MIRC" />
      </div>
    );
  }

  // state = {
  //   persons: [
  //     { name: 'Max', age: 28 },
  //     { name: 'Manu', age: 29 },
  //     { name: 'Stephanie', age: 26 },
  //   ],
  //   otherState: 'some other value',
  // };

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 },
  //     ],
  //   });
  // };
  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Flow', age: 28 },
  //       { name: event.target.value, age: 29 },
  //       { name: 'Stephanie', age: 27 },
  //     ],
  //   });
  // };
  // render() {
  //   const style = {
  //     backgroundColor: 'white',
  //     font: 'inherit',
  //     border: '1px solid blue',
  //     padding: '8px',
  //     cursor: 'pointer',
  //   };
  //   return (
  //     <div className="App">
  //       <h1>TE DREQ FIRST REACT APaP</h1>
  //       <button
  //         onClick={() => this.switchNameHandler('Flowreeen')}
  //         style={style}
  //       >
  //         Switch names
  //       </button>
  //       <Person
  //         name={this.state.persons[0].name}
  //         age={this.state.persons[0].age}
  //       />
  //       <Person
  //         name={this.state.persons[1].name}
  //         age={this.state.persons[1].age}
  //         click={this.switchNameHandler.bind(this, 'FLOWRIN!!!!!')}
  //         changed={this.nameChangedHandler}
  //       >
  //         SMECHER
  //       </Person>
  //       <Person
  //         name={this.state.persons[2].name}
  //         age={this.state.persons[2].age}
  //       />
  //     </div>
  //   );

  //   // return React.createElement(
  //   //   'div',
  //   //   {className:'App'},
  //   //   React.createElement('h1', null, 'TeDREq')
  //   // );
  // }
}

export default App;
