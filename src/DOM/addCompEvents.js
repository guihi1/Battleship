import boardFactory from '../factories/boardFactory';
import addPlayerEvents from './addPlayerEvents';
import gameEnd from './gameEnd';

const compBoardSquares = document.querySelectorAll('.row-c > div');
const compBoard = boardFactory();
const hasEvents = [];

for (let i = 0; i < compBoardSquares.length; i += 1) {
  compBoardSquares[i].classList.add('default');
}

const onClick = (evt) => {
  compBoard.receiveAttack(evt.currentTarget.index);
  evt.currentTarget.visited.push(evt.currentTarget.index);
  if (compBoard.board[evt.currentTarget.index] === 'H') {
    evt.currentTarget.classList.add('hit');
    evt.currentTarget.classList.remove('default');
  }
  evt.currentTarget.textContent = '✖';
  evt.currentTarget.removeEventListener('click', onClick);
  hasEvents[evt.currentTarget.index] = false;
  if (compBoard.allSunk()) {
    gameEnd('win');
  }
  addPlayerEvents();
};

//  Add event listeners to computer board
function addCompEvents(player) {
  for (let i = 0; i < compBoardSquares.length; i += 1) {
    if (hasEvents[i]) {
      compBoardSquares[i].removeEventListener('click', onClick);
      hasEvents[i] = false;
    }
    if (!player.visited.includes(i)) {
      hasEvents[i] = true;
      compBoardSquares[i].addEventListener('click', onClick);
      compBoardSquares[i].index = i;
      compBoardSquares[i].visited = player.visited;
    }
  }
}

export default addCompEvents;
export { compBoard };
