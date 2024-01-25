/* eslint-disable no-param-reassign */
function filter(cell) {
  if (cell === false) return 'miss';
  if (cell === true) return 'hit';
  if (typeof cell === 'object' && cell !== null) return 'boat';
  return 'none';
}

function fillSide(boardDiv, scoreDiv, player) {
  boardDiv.innerHTML = '';
  scoreDiv.textContent = player.score;

  player.gameboard.board.forEach((row) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    row.forEach((cell) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add(`cell`, `${filter(cell)}`);
      rowDiv.appendChild(cellDiv);
    });
    boardDiv.appendChild(rowDiv);
  });
}

export default function populateBoard(leftPlayer, rightPlayer) {
  const leftBoardDiv = document.querySelector('.gameboard .left');
  const rightBoardDiv = document.querySelector('.gameboard .right');

  const leftScoreDiv = document.querySelector('.score .left .value');
  const rightScoreDiv = document.querySelector('.score .right .value');

  fillSide(leftBoardDiv, leftScoreDiv, leftPlayer);
  fillSide(rightBoardDiv, rightScoreDiv, rightPlayer);
}
