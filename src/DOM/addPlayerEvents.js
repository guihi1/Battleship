import boardFactory from '../factories/boardFactory';
import playerFactory from '../factories/playerFactory';
import gameEnd from './gameEnd';

let turn = true;
const player = playerFactory(turn);
const playerBoardSquares = document.querySelectorAll('.row > div');
const playerBoard = boardFactory();
const mask = document.getElementById('page-mask');

const playAgain = document.querySelector('.restart');
playAgain.addEventListener('click', () => {
  mask.classList.remove('show');
  mask.classList.add('hide');
  for (let i = 0; i < playerBoardSquares.length; i += 1) {
    playerBoardSquares[i].classList.remove('hit');
    playerBoardSquares[i].classList.remove('missed');
  }

  const compBoardSquares = document.querySelectorAll('.row-c > div');
  for (let j = 0; j < compBoardSquares.length; j += 1) {
    compBoardSquares[j].classList.remove('hit');
    compBoardSquares[j].classList.remove('missed');
  }
});

//  Add event listeners to player board
const addPlayerEvents = () => {
  const playerIndex = player.computerTurn();
  playerBoard.receiveAttack(playerIndex);
  if (playerBoard.board[playerIndex] === 'M') {
    playerBoardSquares[playerIndex].classList.add('missed');
  } else if (playerBoard.board[playerIndex] === 'H') {
    playerBoardSquares[playerIndex].classList.add('hit');
  }
  if (playerBoard.allSunk()) {
    gameEnd('loss');
  }
};

export default addPlayerEvents;
export { playerBoard, player };
