import React from 'react';
import Button from './lib/Button';
import CheckBox from './lib/Checkbox';
import TextArea from './lib/TextArea';
import Input from './lib/Input';
const handleChangeAttribute = (changeHandler, id, e) => changeHandler(id, e.target.value)

const Form = (props) => {
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
};

export default Form;