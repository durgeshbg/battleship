import './style.css';
import Player from './components/Player';
import Computer from './components/Computer';
import populateBoard from './DOM/populateBoard';
import placeShips from './DOM/placeShips';

export default function init() {
  const human = new Player('Human', true);
  const computer = new Computer();

  populateBoard(human, computer);
  placeShips(human, computer);
}
init();

document.querySelector('.restart .option').onclick = () => {
  init();
};
