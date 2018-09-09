import React from 'react';

class BigForm extends React.Component {
    render() {
    return (
        <div>
          <CheckBox 
          onChange={(e) => handleChangeAttribute(props.handleCheckboxClick, props.id, e)}
          value={props.checkboxValue}
         />
         
          <Input
            onChange={(e) => handleChangeAttribute(props.handleInputChange, props.id, e)}
            value={props.inputValue}
          />
    
          <Button 
            onClick={(e) => handleChangeAttribute(props.handleButtonClick, props.id, e)}
          >
           Done
          </Button>
          
          <div>
            <TextArea 
            label={props.inputValue}
            />
          </div>
        </div>
      );
    }
}

export default BigForm;
