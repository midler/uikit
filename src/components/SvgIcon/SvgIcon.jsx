import React, { Component } from 'react';

class SvgIcon extends Component {
  // component code here

  constructor(props) {
    super(props);
    this.state = {
        fill: this.props.fill,
        width: this.props.width,
        height: this.props.height,
    };
  }

  render() {
    return (
        <svg
          viewBox={'0 0 ' + this.state.width + ' ' + this.state.width}
          xmlns="http://www.w3.org/2000/svg"
          width={this.state.width}
          height={this.state.height}
          preserveAspectRatio="xMinYMin meet"
        ><title>Menu</title>
          <path
            d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1 0 .552-.455 1-.992 1H2.992C2.444 7 2 6.556 2 6zm0 6c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1 0 .552-.455 1-.992 1H2.992C2.444 13 2 12.556 2 12zm0 6c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1 0 .552-.455 1-.992 1H2.992C2.444 19 2 18.556 2 18z"
            fill={this.state.fill}
            fillRule="evenodd"
          />
        </svg>
    )
  }
}

SvgIcon.propTypes = {
   fill: function(props, hex, SvgIcon) {
    if (!/^#([a-f0-9]{6}|[a-f0-9]{3})\b$/.test(props[hex])) {
      return new Error(
        'Invalid prop `' + hex + '` supplied to' +
        ' `' + SvgIcon + '`. Validation failed.'
      );
    }
  },
  width: React.PropTypes.number,
  height: React.PropTypes.number,
}

SvgIcon.defaultProps = {
  fill: '#000000',
  width: 20,
  height: 20,
};

export default SvgIcon;
