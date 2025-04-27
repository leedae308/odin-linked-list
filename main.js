import LinkedList from "./LinkedList.js";
import HashMap from "./HashMap.js";

// const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");


// list.prepend("daehee");

// list.pop();
// list.pop();

// console.log(list.head());


const test = new HashMap(0.75); // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.length() + " " + test.capacity);

test.set('a', 'daehee');


test.set('moon', 'silver');

console.log(test.length() + " " + test.capacity);