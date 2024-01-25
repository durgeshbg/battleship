import Gameboard from './Gameboard';

export default class Player {
  constructor(name, turn = false) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.turn = turn;
    this.score = 0;
  }

  flipTurn() {
    const { turn } = { ...this };
    this.turn = !this.turn;
    return turn;
  }

  shoot(x, y, player) {
    const res = player.gameboard.recieveAttack(x, y);
    if (res === 1) this.score += 1;
    return res;
  }
}
