import boardFactory from '../factories/boardFactory';
import playerFactory from '../factories/playerFactory';

let turn = true;
const player = playerFactory(turn);
const playerBoardSquares = document.querySelectorAll('.row > div');
const playerBoard = boardFactory();

//  Add event listeners to player board
const addPlayerEvents = () => {
  const playerIndex = player.computerTurn();
  playerBoard.receiveAttack(playerIndex);
  if (playerBoard.board[playerIndex] === 'M') {
    playerBoardSquares[playerIndex].classList.add('missed');
  } else if (playerBoard.board[playerIndex] === 'H') {
    playerBoardSquares[playerIndex].classList.add('hit');
  }
};

export default addPlayerEvents;
export { playerBoard, player };
