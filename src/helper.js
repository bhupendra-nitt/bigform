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


const getTree = {
  id: 1, 
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
  },
  children: [
      {
        id: 2, 
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
  },
  children: [
    {
        id: 4, 
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
  },
  children: [

  ]
},
 {
        id: 5, 
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
  },
  children: [

  ]
}
  ]
},
{
  id: 3, 
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
  },
  children: [

  ]
}
  ]
};
export {
 getList, getTree 
}