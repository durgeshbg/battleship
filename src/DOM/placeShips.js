/* eslint-disable no-param-reassign */
import { addBlur, removeBlur } from './blur';
import boardListener from './boardListener';
import populateBoard from './populateBoard';
import previewUpdate from './preview';

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
    previewUpdate(player, z);
  };
  previewUpdate(player, z);
  board.childNodes.forEach((row, i) => {
    row.childNodes.forEach((cell, j) => {
      cell.onclick = () => {
        player.gameboard.placeShip(i, j, z);
        populateBoard(player, opponent);
        if (player.gameboard.ships.length === 0) {
          removeBlur(document.querySelector('.gameboard .right'));
          boardListener(player, opponent);
        } else placeMannual(player, board, opponent, z);
      };
    });
  });
}

export default function placeShips(leftPlayer, rightPlayer) {
  placeRandom(rightPlayer);
  populateBoard(leftPlayer, rightPlayer);
  addBlur(document.querySelector('.gameboard .right'));

  document.querySelector('.random .option').onclick = () => {
    placeRandom(leftPlayer);
    populateBoard(leftPlayer, rightPlayer);
    removeBlur(document.querySelector('.gameboard .right'));
    boardListener(leftPlayer, rightPlayer);
  };

  placeMannual(
    leftPlayer,
    document.querySelector('.gameboard .left'),
    rightPlayer,
  );
}
