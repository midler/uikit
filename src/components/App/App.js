import React, { Component } from 'react';
import logo from  '../Logo/logo.svg';
import './App.css';

import Button from '../Button/Button';
import Input from '../Input/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input value="" />
        <Button text="button">Кнопенция</Button>
      </div>
    );
  }
}

export default App;
