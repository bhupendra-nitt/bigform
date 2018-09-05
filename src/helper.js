const getList = () => {
  let arr = [];
  for(let i = 0; i<2000; i++) {
    arr.push({
      id: i+1,
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
    })
  };
  return arr;
};

export {
 getList 
}