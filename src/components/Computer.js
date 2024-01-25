import Player from './Player';

export default class Computer extends Player {
  constructor() {
    super('Computer', true);
    this.cords = [];
  }

  // eslint-disable-next-line class-methods-use-this
  isEqual = (a, b) => a[0] === b[0] && b[1] === a[1];

  isUnique(a) {
    for (let i = 0; i < this.cords.length; i += 1)
      if (this.isEqual(this.cords[i], a)) return false;
    return true;
  }

  generateCords() {
    if (this.cords.length === 100) return false;
    const cords = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    if (this.isUnique(cords)) {
      this.cords.push(cords);
      return cords;
    }
    return this.generateCords();
  }

  shoot(player) {
    const cords = this.generateCords();
    if (!cords) return -1;
    const res = player.gameboard.recieveAttack(cords[0], cords[1]);
    if (res === 1) this.score += 1;
    return res;
  }
}
