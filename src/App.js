import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const Example = ({ number }) => <div>{number}</div>


class App extends Component {
  render() {
    return (
      <div className="App">
        {data.map((number, index) => <Example number={number} key={index} /> )}
      </div>
    );
  }
}

export default App;
