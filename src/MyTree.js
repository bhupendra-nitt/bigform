export default class MyTree {
  constructor(){
    this.tree = {};
    this.id = 1;
  }

  generateId() {
    this.id= this.id+1;
    return this.id;
  }
  
  pushChildToParent(currentSubTree, data, parentID) {
    if(currentSubTree.data.id === parentID) {
      currentSubTree.children.push({data: {id: this.generateId(), name: 'newData'}, children: []})
    } else {
      for(let child in currentSubTree.children) {
        this.pushChildToParent(currentSubTree.children[child], data, parentID);
      }
    }
  }

  addChild(data, parentID) {
    if(parentID === null) {
      this.tree = {
        data: {
          id: 1,
          name: '1'
        },
        children: []
      }
    } else {
      this.pushChildToParent(this.tree, data, parentID);
    }
  }

  getTree() {
    return this.tree;
  }
}