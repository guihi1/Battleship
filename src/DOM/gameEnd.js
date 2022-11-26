const mask = document.getElementById('page-mask');

const gameEnd = (winStatus) => {
  mask.style.opacity = '1';
  mask.style.visibility = 'visible';
  const postGameMessage = document.createElement('h1');
  if (winStatus === 'win') {
    postGameMessage.textContent = 'You won!';
  } else {
    postGameMessage.textContent = 'You lost!';
  }
  mask.appendChild(postGameMessage);
  const playAgain = document.createElement('button');
  mask.appendChild(playAgain);
};

export default gameEnd;
