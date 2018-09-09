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

  
}