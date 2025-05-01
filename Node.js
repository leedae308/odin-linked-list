//Node.js

class Node {
  constructor(value = null, leftNode = null, rightNode = null) {
    this.value = value;
    // this.nextNode = nextNode;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

export default Node;
