import React from 'react';

export default class Input extends React.PureComponent {
  render() {
    return (
      <input
        type='text'
        onChange={this.props.onChange}
        value={this.props.value}/>
    );
  }
}