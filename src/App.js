import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',
  };
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  };
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={this.deleteCharHandler.bind(this, index)}
        />
      );
    });

    return (
      <div className="App">
        <h1>TE DREQ FIRST REACT APaP</h1>
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}
//   state = {
//     persons: [
//       {id:'1', name: 'Max', age: 28 },
//       {id:'2', name: 'Manu', age: 29 },
//       {id:'3', name: 'Stephanie', age: 26 },
//     ],
//     otherState: 'some other value',
//     showPersons: true,
//   };

//   deletePersonHandler = (personIndex) => {
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({ persons: persons });
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex((p) => {
//       return p.id === id;
//     });

//     const person = { ...this.state.persons[personIndex] };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];

//     persons[personIndex] = person;

//     this.setState({ persons: persons });
//   };
//   togglePersonsHandler = () => {
//     const doesShows = this.state.showPersons;
//     this.setState({ showPersons: !doesShows });
//   };

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer',
//     };

//     let persons = null;
//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//               name={person.name}
//               age={person.age}
//               key={person.id}
//               click={this.deletePersonHandler.bind(this, index)}
//               changed={(event) => this.nameChangedHandler(event, person.id)}
//               />
//             );
//           })}
//         </div>
//       );
//     }
//     return (
//       <div className="App">
//         <h1>TE DREQ FIRST REACT APaP</h1>
//         <button onClick={() => this.togglePersonsHandler()} style={style}>
//           Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//   }
// }

export default App;
