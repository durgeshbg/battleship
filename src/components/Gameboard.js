import Ship from './Ship';

export default class Gameboard {
  constructor() {
    this.ships = [5, 4, 3, 3, 2, 2, 1];
    this.board = [];
    this.initBoard();
  }

  initBoard() {
    for (let i = 0; i < 10; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        this.board[i][j] = null;
      }
    }
  }

  hasNoShip(x, y, type = 5) {
    let c = 0;
    for (let i = 0; i < type; i += 1) if (this.board[x + i][y] === null) c += 1;
    return c === type;
  }

  isvalid(x, y, type) {
    return (
      this.board[x][y] === null && x + type <= 10 && this.hasNoShip(x, y, type)
    );
  }

  placeShip(x, y) {
    if (this.isvalid(x, y, this.ships[0])) {
      const type = this.ships.shift();
      const ship = new Ship(type);
      for (let i = 0; i < type; i += 1) this.board[x + i][y] = ship;
      return ship;
    }
    return false;
  }

  recieveAttack(x, y) {
    if (typeof this.board[x][y] === 'object' && this.board[x][y] !== null) {
      this.board[x][y].hit();
      this.board[x][y] = true;
      return 1;
    }
    if (this.board[x][y] === null) {
      this.board[x][y] = false;
      return -1;
    }
    return 0;
  }

  allSunk() {
    for (let i = 0; i < 10; i += 1)
      for (let j = 0; j < 10; j += 1)
        if (typeof this.board[i][j] === 'object' && this.board[i][j] !== null) {
          return false;
        }
    return true;
  }
}
