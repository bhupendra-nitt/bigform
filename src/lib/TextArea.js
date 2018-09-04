import React from 'react';

export default class TextArea extends React.PureComponent {
  render () {
    return (
      <span>{this.props.label}</span>
    );
  }
}

TextArea.displayName = 'TextArea';
