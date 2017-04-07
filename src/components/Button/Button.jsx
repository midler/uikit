import React, { Component } from 'react';
import './style.scss';

class Button extends Component {
  // component code here

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || this.props.children,
    };
  }

  render() {
    return (
      <div>
        <button className="button">{this.state.text}</button>
      </div>
    )
  }
}

Button.propTypes = {
  text: React.PropTypes.string
}

Button.defaultProps = {
  text: ''
};

export default Button;
