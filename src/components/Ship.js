export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    return this.length - this.hits === 0;
  }
}
