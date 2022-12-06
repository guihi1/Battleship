import boardFactory from '../factories/boardFactory';
import addPlayerEvents from './addPlayerEvents';
import gameEnd from './gameEnd';

const compBoardSquares = document.querySelectorAll('.row-c > div');
const compBoard = boardFactory();
const mask = document.querySelector('#page-mask');
const hasEvents = [];

const newGame = () => {
  const playAgain = document.querySelector('.restart');
  playAgain.addEventListener('click', () => {
    compBoard.boardReset();
    mask.classList.remove('show');
    mask.classList.add('hide');
    for (let i = 0; i < compBoardSquares.length; i += 1) {
      compBoardSquares[i].classList.remove('hit');
      compBoardSquares[i].classList.remove('missed');
    }

    const playerBoardSquares = document.querySelectorAll('.row > div');
    for (let j = 0; j < playerBoardSquares.length; j += 1) {
      playerBoardSquares[j].classList.remove('hit');
      playerBoardSquares[j].classList.remove('missed');
    }
  });
};

const onClick = (evt) => {
  compBoard.receiveAttack(evt.currentTarget.index);
  if (compBoard.board[evt.currentTarget.index] === 'M') {
    evt.currentTarget.classList.add('missed');
  } else if (compBoard.board[evt.currentTarget.index] === 'H') {
    evt.currentTarget.classList.add('hit');
  }
  evt.currentTarget.removeEventListener('click', onClick);
  hasEvents[evt.currentTarget.index] = false;
  if (compBoard.allSunk()) {
    gameEnd('win');
    newGame();
  }
  addPlayerEvents();
};

//  Add event listeners to computer board
function addCompEvents(visited) {
  console.log('fkajdkfajl');
  for (let i = 0; i < compBoardSquares.length; i += 1) {
    if (hasEvents[i]) {
      compBoardSquares[i].removeEventListener('click', onClick);
      hasEvents[i] = false;
    }

    if (!visited.includes(i)) {
      console.log('giajrodijafçoid');
      hasEvents[i] = true;
      compBoardSquares[i].addEventListener('click', onClick);
      compBoardSquares[i].index = i;
      visited.push(i);
    }
  }
}

export default addCompEvents;
export { compBoard };
