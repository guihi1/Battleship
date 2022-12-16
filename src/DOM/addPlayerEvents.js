import boardFactory from '../factories/boardFactory';
import playerFactory from '../factories/playerFactory';
import gameEnd from './gameEnd';

let turn = true;
const player = playerFactory(turn);
const playerBoardSquares = document.querySelectorAll('.row > div');
const playerBoard = boardFactory();
const mask = document.getElementById('page-mask');
const start = document.getElementById('start-page');

for (let i = 0; i < playerBoardSquares.length; i += 1) {
  playerBoardSquares[i].classList.add('default');
}

const playAgain = document.querySelector('.restart');
playAgain.addEventListener('click', () => {
  mask.classList.remove('show');
  mask.classList.add('hide');
  start.classList.remove('hide');
  for (let i = 0; i < playerBoardSquares.length; i += 1) {
    playerBoardSquares[i].classList.remove('hit');
    playerBoardSquares[i].textContent = '';
    if (!playerBoardSquares[i].classList.contains('default')) {
      playerBoardSquares[i].classList.add('default');
    }
  }

  const compBoardSquares = document.querySelectorAll('.row-c > div');
  for (let j = 0; j < compBoardSquares.length; j += 1) {
    compBoardSquares[j].classList.remove('hit');
    compBoardSquares[j].textContent = '';
    if (!compBoardSquares[j].classList.contains('default')) {
      compBoardSquares[j].classList.add('default');
    }
  }
});

//  Add event listeners to player board
const addPlayerEvents = () => {
  const playerIndex = player.computerTurn();
  playerBoard.receiveAttack(playerIndex);
  if (playerBoard.board[playerIndex] === 'H') {
    playerBoardSquares[playerIndex].classList.add('hit');
    playerBoardSquares[playerIndex].classList.remove('default');
  }
  playerBoardSquares[playerIndex].textContent = '✖';
  if (playerBoard.allSunk()) {
    gameEnd('loss');
  }
};

export default addPlayerEvents;
export { playerBoard, player };
