import './styles.css';
import addCompEvents, { compBoard } from './DOM/addCompEvents';
import { playerBoard, player, showPlayerShips } from './DOM/addPlayerEvents';

const startPage = document.getElementById('start-page');
const start = document.getElementById('start');
start.addEventListener('click', () => {
  const carPos = document.getElementById('car-square').value;
  const carDir = document.getElementById('car-dir').value;
  const batPos = document.getElementById('bat-square').value;
  const batDir = document.getElementById('bat-dir').value;
  const cruPos = document.getElementById('cru-square').value;
  const cruDir = document.getElementById('cru-dir').value;
  const subPos = document.getElementById('sub-square').value;
  const subDir = document.getElementById('sub-dir').value;
  const desPos = document.getElementById('des-square').value;
  const desDir = document.getElementById('des-dir').value;
  if (
    carPos < 0 || carPos > 99
    || batPos < 0 || batPos > 99
    || cruPos < 0 || cruPos > 99
    || subPos < 0 || subPos > 99
    || desPos < 0 || desPos > 99
  ) {
    const carField = document.getElementById('car-field');
    const batField = document.getElementById('bat-field');
    const cruField = document.getElementById('cru-field');
    const subField = document.getElementById('sub-field');
    const desField = document.getElementById('des-field');
    if (carPos < 0 || carPos > 99) {
      carField.classList.add('validation-error');
    } else {
      carField.classList.add('validation-success');
    }
    if (batPos < 0 || batPos > 99) {
      batField.classList.add('validation-error');
    } else {
      batField.classList.add('validation-success');
    }
    if (cruPos < 0 || cruPos > 99) {
      cruField.classList.add('validation-error');
    } else {
      cruField.classList.add('validation-success');
    }
    if (subPos < 0 || subPos > 99) {
      subField.classList.add('validation-error');
    } else {
      subField.classList.add('validation-success');
    }
    if (desPos < 0 || desPos > 99) {
      desField.classList.add('validation-error');
    } else {
      desField.classList.add('validation-success');
    }
  } else {
    playerBoard.placeShips(5, Number(carPos), carDir);
    playerBoard.placeShips(4, Number(batPos), batDir);
    playerBoard.placeShips(3, Number(cruPos), cruDir);
    playerBoard.placeShips(3, Number(subPos), subDir);
    playerBoard.placeShips(2, Number(desPos), desDir);
    showPlayerShips();
    compBoard.placeShips(5, 0);
    compBoard.placeShips(4, 1);
    compBoard.placeShips(3, 2);
    compBoard.placeShips(3, 3);
    compBoard.placeShips(2, 4);
    startPage.classList.add('hide');
  }
});

addCompEvents(player);

const playAgain = document.getElementById('restart');
playAgain.addEventListener('click', () => {
  player.playerReset();
  playerBoard.boardReset();
  compBoard.boardReset();
  addCompEvents(player);
});
