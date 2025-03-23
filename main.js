import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


list.prepend("daehee");

list.pop();
list.pop();

console.log(list.head());
