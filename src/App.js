import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [
        { name: 'Mauricio', age: '25' },
        { name: 'Camila', age: '25' },
        { name: 'Yeison', age: '25' },
        { name: 'Viviana', age: '25' },
      ]
    };
  }

  switchNameHandler = () => {
    this.setState({
      personas: [{ name: 'Cristian', age: '25' },
                 { name: 'Juan', age: '25' },
                 { name: 'Yeison', age: '25' },
                 { name: 'Viviana', age: '25' },]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      personas: [{ name: 'Cristian', age: '25' },
                 { name: 'Juan', age: '25' },
                 { name: 'Yeison', age: '25' },
                 { name: event.target.value, age: '25' },]
    })
  }

  render() {
    const style={
      backgroundColor: 'blue',
      color:"red"
    }
    return (
      <div className="App">
        <h1>Aplicacion en react</h1>
        <button style={style} onClick={this.switchNameHandler}> Click Me!!</button>
        <Person  name={this.state.personas[0].name} age={this.state.personas[0].age}> My hobbie favorito es ver series </Person>
        <Person name={this.state.personas[1].name} age={this.state.personas[1].age} />
        <Person name={this.state.personas[2].name}  age={this.state.personas[2].age} />
        <Person click={this.switchNameHandler} change={this.changeNameHandler} name={this.state.personas[3].name} age={this.state.personas[3].age} />

      </div>
    );
  }

}

export default App;
