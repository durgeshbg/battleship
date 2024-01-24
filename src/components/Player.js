import Gameboard from './Gameboard';

export default class Player {
  constructor(name, turn = false) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.turn = turn;
  }
}
