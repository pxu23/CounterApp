
import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import Counters from './components/counters.jsx'

class App extends Component {

  state = {
    counter: [
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
}

constructor() {
  super();
  console.log('App - Constructor')
  // this.state = this.props. something;
}

componentDidMount() {
  // Ajax call
  console.log('App - Mounted');
}

handleIncrement = (counter) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counter:counters})
} 

handleReset = () => {
    const counters = this.state.counter.map(c => {c.value = 0; return c;})
    this.setState({counter:counters})
}

handleDelete = (counterId) => {
    const counters = this.state.counter.filter(c=> c.id !== counterId)
    this.setState({counter:counters})
}

  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
      <NavBar totalCounters = {this.state.counter.filter(c => c.value > 0).length}/>
      <main className = "container">
        <Counters 
        counter = {this.state.counter}
        onReset = {this.handleReset}
        onDelete = {this.handleDelete}
        onIncrement = {this.handleIncrement}
        />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
