import React, { Component } from 'react';

import './App.css';
import Button from './lib/Button';
import Form from './Form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSet: [],
      id: 1
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._handleCheckboxClick = this._handleCheckboxClick.bind(this);
    this._addNewRow = this._addNewRow.bind(this);
  }

  _handleInputChange(id, value) {
    const { dataSet } = this.state;

   for(let i = 0; i< dataSet.length; i++) {
     if(dataSet[i].id === id) {
       dataSet[i].data.input.value = value;
       this.setState({dataSet: dataSet});
     }
   }
  }

  _handleButtonClick(id, value) {
    const { dataSet } = this.state;

    for(let i = 0; i< dataSet.length; i++) {
      if(dataSet[i].id === id) {
       console.log(value);
        this.setState({dataSet: dataSet});
      }
    }
  }

  _handleCheckboxClick(id) {
    const { dataSet } = this.state;

    for(let i = 0; i< dataSet.length; i++) {
      if(dataSet[i].id === id) {
        dataSet[i].data.checkbox.value = !dataSet[i].data.checkbox.value;
        this.setState({dataSet: dataSet});
      }
    }
  }

  _addNewRow() {
    const { dataSet } = this.state;
    const newDataSet = dataSet.concat({
      id: this.state.id +1, 
      data: { 
        checkbox: { 
          value: false 
        }, 
        button: { 
          label: ''  
        },
        textArea: {
          value: ''
        },
        input: {
          value: ''
        } 
      }
    });
    this.setState({dataSet: newDataSet, id: this.state.id+1 });
  }

  render() {
    const { dataSet } = this.state
    return (
      <div className="App">
      {
        dataSet.map(element => {
          return <Form
          key={element.id}
          id={element.id}
          inputValue={element.data.input.value}
          checkboxValue={element.data.checkbox.value}
          textAreaValue={element.data.textArea.value}
          handleButtonClick={this._handleButtonClick}
          handleCheckboxClick={this._handleCheckboxClick}
          handleInputChange={this._handleInputChange}
          />
        })
      }
       <Button 
        onClick={this._addNewRow}
       >
       Add
       </Button>
      </div>
    );
  }
}

export default App;
