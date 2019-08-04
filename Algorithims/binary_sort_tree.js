"use strict";

class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 

class BinarySearchTree {
  constructor () {
    // root of a binary seach tree
    this.root = null;
  }

  // functions to be implemented 
    insert(data) {
      let newNode = new Node(data);

      if (this.root === null) {
        // insert as root
        this.root = newNode;
      }
      else {
        // find correct position and insert
        this.insertNode(this.root, newNode); 
      }

    }
    
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        }
        else {
          this.insertNode(node.left, newNode);
        }
      }
      else {
        if (node.right === null) {
          node.right = newNode;
        }
        else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    remove(data) {

    }
                  
  
    // Helper functions 
    findMinNode() {

    }

    getRootNode() {

    }

    inorder(node) {

    }

    preorder(node) {

    }           

    postorder(node) {

    }

    search(node, data) {

    }

}
