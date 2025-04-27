//HashMap.js

class HashMap {
  constructor(loadFactor) {
    this.loadFactor = loadFactor;
    this.capacity = 10;
    this.array = new Array(this.capacity);
    this.count = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    let idx = this.hash(key);
    if (this.array[idx] == undefined) this.count++;
    this.array[idx] = [key, value];

    if (this.count / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    let idx = this.hash(key);
    if (!this.array[idx]) return null;

    if (this.array[idx][0] === key) {
      return this.array[idx][1];
    } else return null;
  }

  has(key) {
    let idx = this.hash(key);
    if (undefined === this.array[idx]) return false;

    return true;
  }

  remove(key) {
    let idx = this.hash(key);
    if (undefined === this.array[idx]) return false;
    this.array.splice(idx, 1);
    this.count--;
    return true;
  }

  length() {
    return this.count;
  }

  clear() {
    this.array = [];
    this.count = 0;
  }

  keys() {
    return this.array
      .filter((pair) => pair != undefined)
      .map((pair) => pair[0]);
  }

  values() {
    return this.array
      .filter((pair) => pair != undefined)
      .map((pair) => pair[1]);
  }

  entries() {
    return this.array.filter((pair) => pair != undefined);
  }

  resize() {
    let newArray = new Array(this.capacity * 2);
    this.array.forEach((pair) => {
      newArray[this.hash(pair[0])] = [pair[0], pair[1]];
    });
    this.capacity *= 2;
  }
}

export default HashMap;
