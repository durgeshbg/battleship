export default function displayWinner(player) {
  const gameboard = document.querySelector('.gameboard');
  const winnerDiv = document.createElement('div');

  gameboard.innerHTML = '';
  winnerDiv.textContent = `${player.name} wins!`;
  winnerDiv.classList.add('winner');
  gameboard.appendChild(winnerDiv);
}
