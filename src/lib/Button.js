import React from 'react';
import PropTypes from 'prop-types';


export default class Button extends React.PureComponent {
  render() {
    return (
      <button
       onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func
};

Button.displayName = 'Button';
