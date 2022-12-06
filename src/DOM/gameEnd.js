const mask = document.getElementById('page-mask');

const gameEnd = (winStatus) => {
  mask.classList.remove('hide');
  mask.classList.add('show');
  const postGameMessage = document.getElementById('winner');
  if (winStatus === 'win') {
    postGameMessage.textContent = 'You won!';
  } else {
    postGameMessage.textContent = 'You lost!';
  }
};

export default gameEnd;
