import './style.css';
import Player from './components/Player';
import Computer from './components/Computer';

const human = new Player('Human', true);
const computer = new Computer();

human.gameboard.placeShip(1, 2);
human.gameboard.placeShip(1, 4);
human.gameboard.placeShip(2, 6);
human.gameboard.placeShip(6, 3);
human.gameboard.placeShip(6, 7);
human.gameboard.placeShip(4, 8);
human.gameboard.placeShip(8, 1);

computer.gameboard.placeShip(0, 2);
computer.gameboard.placeShip(1, 4);
computer.gameboard.placeShip(2, 6);
computer.gameboard.placeShip(6, 3);
computer.gameboard.placeShip(6, 7);
computer.gameboard.placeShip(4, 8);
computer.gameboard.placeShip(8, 1);


