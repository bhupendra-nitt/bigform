import React, { Component } from 'react';

import './App.css';
import Button from './lib/Button';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: {},
      id: 1
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._handleCheckboxClick = this._handleCheckboxClick.bind(this);
    this.addChild = this.addChild.bind(this);
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

  generateId() {
    return this.state.id+1;
  }

  pushChildToParent(currentSubTree, data, parentID) {
    if(currentSubTree.id === parentID) {
      const newID = this.state.id +1;
      currentSubTree.children.push({
        id: newID,
        data: { 
          name: 'hello'
        },
        children: []
      })
      this.setState({id: this.state.id + 1});
      return;
    } else {
      for(let child in currentSubTree.children) {
        this.pushChildToParent(currentSubTree.children[child], data, parentID);
      }
    }
  }

  addChild(data, parentID) {
    if(parentID === null) {
      let tempTree = {
        id: 1,
        data: {
          name: 'hello'
        },
        children: []
      }
      this.setState({tree: tempTree, id: this.state.id++});
    } else {
      this.pushChildToParent(this.state.tree, data, parentID);
    }
  }

  _handleAddChildButton(data, id) {
    this.addChild(data, id);
  }

  render() {
    const { tree } = this.state
    return (
      <div className="App">
        {
        tree.data && <Form
          key={tree.id}
          id={tree.id}
          addChild={this.addChild}
          children={tree.children}
          />
          }
       { this.state.id === 1 && <Button 
        onClick={() => this._handleAddChildButton({}, null)}
       >
        Add
       </Button>
       }
      </div>
    );
  }
}

export default App;
