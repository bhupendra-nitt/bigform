import React from 'react';
import Button from './lib/Button';
import CheckBox from './lib/Checkbox';
import TextArea from './lib/TextArea';
import Input from './lib/Input';

class Form extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
       one
        <Button 
            onClick={() => this.props.addChild({
              id: this.props.id +1,
              data: { 
                name: this.props.id 
              },
              children: []
            }, this.props.id)}
          >
          Add
          </Button>
          {
          this.props.children && this.props.children.map(element => {
            return <div style={{paddingLeft: '20px'}}>
              <Form
                key={element.id}
                id={element.id}
                addChild={this.props.addChild}
                children={element.children}
              />
            </div>
          })
        }
      </div>
    );
   }
};

export default Form;