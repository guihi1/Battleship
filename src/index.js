import './styles.css';
import addCompEvents, { compBoard } from './DOM/addCompEvents';
import { playerBoard, player } from './DOM/addPlayerEvents';

const startPage = document.getElementById('start-page');
const start = document.getElementById('start');
start.addEventListener('click', () => {
  startPage.classList.add('hide');
  const carPos = document.getElementById('car-square').value;
  const carDir = document.getElementById('car-dir').value;
  playerBoard.placeShips(5, carPos, carDir);
  const batPos = document.getElementById('bat-square').value;
  const batDir = document.getElementById('bat-dir').value;
  playerBoard.placeShips(4, batPos, batDir);
  const cruPos = document.getElementById('cru-square').value;
  const cruDir = document.getElementById('cru-dir').value;
  playerBoard.placeShips(3, cruPos, cruDir);
  const subPos = document.getElementById('sub-square').value;
  const subDir = document.getElementById('sub-dir').value;
  playerBoard.placeShips(3, subPos, subDir);
  const desPos = document.getElementById('des-square').value;
  const desDir = document.getElementById('des-dir').value;
  playerBoard.placeShips(2, desPos, desDir);
});

compBoard.placeShips(5, 0);
compBoard.placeShips(4, 1);
compBoard.placeShips(3, 2);
compBoard.placeShips(3, 3);
compBoard.placeShips(2, 4);

addCompEvents(player);

const playAgain = document.getElementById('restart');
playAgain.addEventListener('click', () => {
  player.playerReset();
  playerBoard.boardReset();
  compBoard.boardReset();
  playerBoard.placeShips(5, 0, 'horizontal');
  playerBoard.placeShips(4, 31, 'vertical');
  playerBoard.placeShips(3, 50, 'horizontal');
  playerBoard.placeShips(3, 73, 'vertical');
  playerBoard.placeShips(2, 89, 'horizontal');

  compBoard.placeShips(5, 0);
  compBoard.placeShips(4, 1);
  compBoard.placeShips(3, 2);
  compBoard.placeShips(3, 3);
  compBoard.placeShips(2, 4);
  console.log(player);
  addCompEvents(player);
});
