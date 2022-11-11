import boardFactory from '../factories/boardFactory';

const compBoardSquares = document.querySelectorAll('.row-c > div');
const compBoard = boardFactory();

const onClick = (evt) => {
  compBoard.receiveAttack(evt.currentTarget.index);
  if (compBoard.board[evt.currentTarget.index] === 'M') {
    evt.currentTarget.classList.add('missed');
  } else if (compBoard.board[evt.currentTarget.index] === 'H') {
    evt.currentTarget.classList.add('hit');
  }
  evt.currentTarget.removeEventListener('click', onClick);
};

//  Add event listeners to computer board
function addCompEvents(visited) {
  for (let i = 0; i < compBoardSquares.length; i += 1) {
    if (!visited.includes(i)) {
      compBoardSquares[i].addEventListener('click', onClick);
      compBoardSquares[i].index = i;
      visited.push(i);
    }
  }
}

export default addCompEvents;
export { compBoard };
