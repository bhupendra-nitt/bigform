import Node from './Node';

export default class Tree {
  constructor(){
    this.root = null;
  }

  // traverseBF(fn){
  //   const arr = [this.root];
  //   while(arr.length) {
  //     const node = arr.shift();

  //     arr.push(...node.children);
  //   }
  //   return arr;
  // }

  // traverseDF(){
  //   const arr = [this.root];
  //   while(arr.length) {
  //     const node = arr.shift();

  //     arr.unshift(...node.children);
  //     fn(parentNode, data, arr);
  //   }
  // }

  insertChild(root, parentNode, data){
    if(root.root){
      for(let child in root.children) {
        if(child.id === parentNode.id){
          root.children.push(new Node(data))
          return;
        }
      }
    } else {
      this.insertChild(root.root.children, parentNode, data);
    }
  }

  insertRoot(data) {
    this.root = new Node(data);
  }

  deleteNode(root, nodeData) {
    if(root.data.id === nodeData.id) {
      delete root.data;
    } else {
      for(let child in root.children) {
        this.deleteNode(child, nodeData);
      }
    }
  }
}