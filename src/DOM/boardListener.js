import populateBoard from './populateBoard';

export default function boardListener(leftPlayer, rightPlayer) {
  const rightBoard = document.querySelector('.gameboard .right');
  rightBoard.childNodes.forEach((row, i) => {
    row.childNodes.forEach((cell, j) => {
      cell.addEventListener('click', () => {
        if (
          !leftPlayer.gameboard.allSunk() &&
          !rightPlayer.gameboard.allSunk()
        ) {
          if (leftPlayer.shoot(i, j, rightPlayer) !== 0) {
            rightPlayer.shoot(leftPlayer);
            populateBoard(leftPlayer, rightPlayer);
            boardListener(leftPlayer, rightPlayer);
          }
        }
      });
    });
  });
}
