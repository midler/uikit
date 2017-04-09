import React, { Component } from 'react';
import './style.scss';

class Button extends Component {
  // component code here

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || this.props.children,
      focus: false,
      active: false,
      hover: false,
      disabled: false,
      className: this.props.className + ' button',
    };
  }

  handleFocus() {
    this.setState({
      focus: !this.state.focus,
      className
    })
  }
  handleActive() {
    this.setState({
      active: !this.state.active,
    })
  }
  handleHover() {
    this.setState({
      hover: !this.state.hover,
    })
  }
  handleDisabled() {
    this.setState({
      disabled: !this.state.disabled,
    })
  }




  render() {
    let classNameList = 'button';


    return (
      <div>
        <button
          className={classNameList}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleFocus.bind(this)}
          disabled={this.handleFocus.bind(this)}
          onMouseEnter={this.handleFocus.bind(this)}
          onMouseLeave={this.handleFocus.bind(this)}
        >
          {this.state.text}
        </button>



        <button className="button button_disabled" disabled>{this.state.text}</button>
        <button className="button button_hover">{this.state.text}</button>
        <button className="button button_active">{this.state.text}</button>
        <button className="button button_focus">{this.state.text}</button>
      </div>
    )
  }
}

Button.propTypes = {
  text: React.PropTypes.string,
  className: React.PropTypes.string,
}

Button.defaultProps = {
  text: '',
  className: '',
};

export default Button;
