import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [
        { id: 'id1', name: 'Mauricio', age: '25' },
        { id: 'id2', name: 'Camila', age: '25' },
        { id: 'id3', name: 'Yeison', age: '25' },
        { id: 'id4', name: 'Viviana', age: '25' },
      ],
      showPerson: true
    };
  }


  showPerson = () => {
    this.setState({ showPerson: !this.state.showPerson })
  }
  changeNameHandler = (event, index) => {
    var persona = this.state.personas;
    persona[index].name = event.target.value;
    this.setState({personas:persona});
  }

  delteHandlePerson = (index) => {
    const personas = this.state.personas;
    personas.splice(index, 1);
    this.setState({ personas: personas })

  }

  render() {
    const classes = []
    const style = {
      backgroundColor: 'blue',
      color: "red"
    }
    let personas = null;
    if (this.state.showPerson) {

      personas = (
        this.state.personas.map((persona, index) => {

          return <Person key={persona.id} change={(event)=>this.changeNameHandler(event,index)} click={() => this.delteHandlePerson(index)} name={persona.name} age={persona.age} />
        }

        )
      );

      style.backgroundColor = 'black'
      style.color = 'green'

    }

    if (this.state.personas.length < 3) {
      classes.push('bold');
    }

    if (this.state.personas.length < 2) {
      classes.push('color');
    }
    if (this.state.personas.length < 1) {
      classes.push('size');  // ['bold','color','size']
    }
    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Aplicacion en react</h1>
        <Button onClick={this.showPerson} variant="outline-warning">Click Me!!</Button>{' '}
   
        {personas}
      </div>
    );
  }

}

export default App;
