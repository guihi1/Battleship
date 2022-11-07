const playerFactory = (turn, visited = []) => {
  const randomNum = () => Math.floor(Math.random() * 100);

  const changeTurn = () => {
    if (turn) {
      return playerFactory(false, visited);
    }
    return playerFactory(true, visited);
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
