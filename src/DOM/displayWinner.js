export default function displayWinner(player) {
  const right = document.querySelector('.gameboard .right');
  const left = document.querySelector('.gameboard .left');
  const winnerDiv = document.createElement('div');

  right.innerHTML = '';
  left.innerHTML = '';
  winnerDiv.textContent = `${player.name} wins!`;
  winnerDiv.classList.add('winner');
  right.appendChild(winnerDiv);
}
