import Ship from './Ship';

export default class Gameboard {
  #board = [];

  constructor(name) {
    this.ships = [5, 4, 3, 3, 2, 2, 1];
    this.name = name;
    this.initBoard();
  }

  initBoard() {
    for (let i = 0; i < 10; i += 1) {
      this.#board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        this.#board[i][j] = null;
      }
    }
  }

  placeShip(x, y) {
    if (this.#board[x][y] === null && x + this.ships[0] < 10) {
      const type = this.ships.shift();
      const ship = new Ship(type);
      for (let i = 0; i < type; i += 1) this.#board[x + i][y] = ship;
      return ship;
    }
    return false;
  }

  recieveAttack(x, y) {
    if (typeof this.#board[x][y] === 'object' && this.#board[x][y] !== null) {
      this.#board[x][y].hit();
      this.#board[x][y] = true;
      return 1;
    }
    if (this.#board[x][y] === null) {
      this.#board[x][y] = false;
      return -1;
    }
    return 0;
  }

  allSunk() {
    for (let i = 0; i < 10; i += 1)
      for (let j = 0; j < 10; j += 1)
        if (
          typeof this.#board[i][j] === 'object' &&
          this.#board[i][j] !== null
        ) {
          return false;
        }
    return true;
  }
}
