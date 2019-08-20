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
      this.root = this.removeNode(this.root, data); 
    }

    removeNode(node, key) { 
        if(node === null) 
            return null; 
        // if data to be delete is less than  
        // roots data then move to left subtree 
        else if(key < node.data) 
        { 
            node.left = this.removeNode(node.left, key); 
            return node; 
        } 
      
      // if data to be delete is greater than  
      // roots data then move to right subtree 
      else if(key > node.data) 
      { 
          node.right = this.removeNode(node.right, key); 
          return node; 
      } 
    
      // if data is similar to the root's data  
      // then delete this node 
      else
      { 
        // deleting node with no children 
        if(node.left === null && node.right === null) 
        { 
            node = null; 
            return node; 
        } 
          // deleting node with one children 
          if(node.left === null) 
          { 
              node = node.right; 
              return node; 
          } 
            else if(node.right === null) 
            { 
                node = node.left; 
                return node; 
            } 
      
            // Deleting node with two children 
            // minumum node of the rigt subtree 
            // is stored in aux 
            var aux = this.findMinNode(node.right); 
            node.data = aux.data; 
      
            node.right = this.removeNode(node.right, aux.data); 
            return node; 
          } 
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
