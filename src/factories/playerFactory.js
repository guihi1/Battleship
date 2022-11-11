const playerFactory = (turn, visited = [], compVisited = []) => {
  const addToVisited = (value) => {
    visited.push(value);
  };

  const randomNum = () => Math.floor(Math.random() * 100);

  const changeTurn = () => {
    if (turn) {
      return playerFactory(false, visited);
    }
    return playerFactory(true, visited);
  };

  const computerTurn = () => {
    let playCoord = randomNum();
    while (compVisited.includes(playCoord)) {
      playCoord += 1;
      if (playCoord > 99) {
        playCoord = 0;
      }
    }
    compVisited.push(playCoord);
    return playCoord;
  };

  return {
    turn, visited, compVisited, changeTurn, computerTurn, addToVisited,
  };
};

export default playerFactory;
