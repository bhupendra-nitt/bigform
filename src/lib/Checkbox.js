import React from 'react';

export default class Checkbox extends React.PureComponent {
  render(){
    return (
      <label >
      <input
        type='checkbox'
        name={this.props.name}
        disabled={this.props.disabled}
        value={this.props.value}
        defaultChecked={this.props.defaultChecked}
        checked={this.props.checked}
        onChange={this.props.onChange}
        onClick={this.props.onClick}
      />
      {this.props.label && <span title={this.props.label}>{this.props.label}</span>}
      </label>
    );
    }
}

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  disabled: false,
  inline: false
};
