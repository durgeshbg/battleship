import Gameboard from './Gameboard';

export default class Player {
  constructor(name, turn = false) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.turn = turn;
  }

  flipTurn() {
    const { turn } = { ...this };
    this.turn = !this.turn;
    return turn;
  }

  shoot(x, y) {
    return this.gameboard.recieveAttack(x, y);
  }
}
