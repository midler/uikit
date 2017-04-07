import React, { Component } from 'react';
import './style.scss';

class Input extends Component {
  // component code here

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  handleChange(){
    this.state.value = this.value;
  }

  render() {
    return (
        <input
          type="text"
          className="input"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
    )
  }
}

Input.propTypes = {
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,

}

Input.defaultProps = {
  placeholder: '',
  value: ''
};

export default Input;
