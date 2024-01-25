/* eslint-disable no-param-reassign */
import boardListener from './boardListener';
import populateBoard from './populateBoard';

function placeRandom(player) {
  while (player.gameboard.ships.length) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    player.gameboard.placeShip(x, y);
  }
}

function placeMannual(player, board, opponent) {
  board.childNodes.forEach((row, i) => {
    row.childNodes.forEach((cell, j) => {
      cell.onclick = () => {
        player.gameboard.placeShip(i, j);
        populateBoard(player, opponent);
        if (player.gameboard.ships.length === 0)
          boardListener(player, opponent);
        else placeMannual(player, board, opponent);
      };
    });
  });
}

export default function placeShips(leftPlayer, rightPlayer) {
  placeRandom(rightPlayer);
  populateBoard(leftPlayer, rightPlayer);

  placeMannual(
    leftPlayer,
    document.querySelector('.gameboard .left'),
    rightPlayer,
  );
}
