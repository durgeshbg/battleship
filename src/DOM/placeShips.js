/* eslint-disable no-param-reassign */
import boardListener from './boardListener';
import populateBoard from './populateBoard';

function placeRandom(player) {
  while (player.gameboard.ships.length) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const z = Math.floor(Math.random() * 2);
    player.gameboard.placeShip(x, y, z);
  }
}

function placeMannual(player, board, opponent, z = 0) {
  document.querySelector('.rotate .option').onclick = () => {
    z = z === 0 ? 1 : 0;
  };
  board.childNodes.forEach((row, i) => {
    row.childNodes.forEach((cell, j) => {
      cell.onclick = () => {
        player.gameboard.placeShip(i, j, z);
        populateBoard(player, opponent);
        if (player.gameboard.ships.length === 0) {
          document.querySelector('.gameboard .right').classList.remove('blur');
          boardListener(player, opponent);
        } else placeMannual(player, board, opponent, z);
      };
    });
  });
}

export default function placeShips(leftPlayer, rightPlayer) {
  placeRandom(rightPlayer);
  populateBoard(leftPlayer, rightPlayer);
  document.querySelector('.gameboard .right').classList.add('blur');

  document.querySelector('.random .option').onclick = () => {
    placeRandom(leftPlayer);
    populateBoard(leftPlayer, rightPlayer);
    document.querySelector('.gameboard .right').classList.remove('blur');
    boardListener(leftPlayer, rightPlayer);
  };

  placeMannual(
    leftPlayer,
    document.querySelector('.gameboard .left'),
    rightPlayer,
  );
}
