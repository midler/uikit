import React, { Component } from 'react';
import logo from  '../Logo/logo.svg';
import './App.css';

import Button from '../Button/Button';
import Input from '../Input/Input';
import SvgIcon from '../SvgIcon/SvgIcon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt=""/>
        <Input value="" />
        <Button text="button">Кнопенция</Button>
        <SvgIcon fill="#ddd222" width={100} height={100} />
      </div>
    );
  }
}

export default App;
