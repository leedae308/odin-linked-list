//LinkedList.js

import Node from "./Node";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
      return;
    }

    let currentNode = this.head;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value, null);
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
      return;
    }

    const newNode = new Node(value, this.head);
    this.head = newNode;
  }
}
