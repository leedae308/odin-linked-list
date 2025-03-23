//LinkedList.js

import Node from "./Node";

class LinkedList {
  constructor() {
    this.root = null;
  }

  append(value) {
    if (this.root === null) {
      this.root = new Node(value, null);
      return;
    }

    let currentNode = this.root;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value, null);
  }

  prepend(value) {
    if (this.root === null) {
      this.root = new Node(value, null);
      return;
    }

    const newNode = new Node(value, this.root);
    this.root = newNode;
  }

  size() {
    let size = 0;
    let currentNode = this.root;
    while (currentNode.nextNode != null) {
      size += 1;
      currentNode = currentNode.nextNode;
    }
    return size;
  }

  head() {
    return this.root;
  }

  tail() {
    let currentNode = this.root;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    let currentNode = this.root;
    let counter = 0;

    while (currentNode !== null) {
      if (counter === index) return currentNode;
      currentNode = currentNode.nextNode;
      counter++;
    }
    return null;
  }

  pop() {
    if (this.root == null) return;
    if (this.root.nextNode === null) {
      this.root = null;
      return;
    }

    let currentNode = this.root;
    let prevNode = null;

    while (currentNode.nextNode != null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    prevNode.nextNode = null;
  }

  contains(value) {
    if (this.root == null) return false;

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value == value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.root == null) return null;

    let currentNode = this.root;
    let counter = 0;

    while (currentNode !== null) {
      if (currentNode.value == value) return counter;
      counter += 1;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  
}
