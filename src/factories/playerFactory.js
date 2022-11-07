const playerFactory = (turn) => {
  const visited = [];
  const randomNum = () => Math.floor(Math.random() * 100);

  const changeTurn = () => {
    if (turn) {
      turn = false;
    } else {
      turn = true;
    }
  };

  const computerTurn = () => {
    let playCoord = randomNum();
    while (visited.includes(playCoord)) {
      playCoord = randomNum();
    }
    visited.push(playCoord);
    return playCoord;
  };

  return {
    turn, visited, changeTurn, computerTurn,
  };
};

export default playerFactory;
