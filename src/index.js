import './styles.css';
import addCompEvents, { compBoard } from './DOM/addCompEvents';
import { playerBoard, player } from './DOM/addPlayerEvents';

playerBoard.placeShips(5, 0, 'horizontal');
playerBoard.placeShips(4, 31, 'vertical');
playerBoard.placeShips(3, 50, 'horizontal');
playerBoard.placeShips(3, 73, 'vertical');
playerBoard.placeShips(2, 89, 'horizontal');

compBoard.placeShips(5, 3, 'horizontal');
compBoard.placeShips(4, 31, 'horizontal');
compBoard.placeShips(3, 49, 'vertical');
compBoard.placeShips(3, 61, 'vertical');
compBoard.placeShips(2, 85, 'horizontal');

addCompEvents(player.visited);
