const shipFactory = (length, hits, sunk, coord = []) => {
  const hit = () => shipFactory(length, hits + 1, sunk, coord);
  const isSunk = () => {
    if (hits === length) {
      return shipFactory(length, hits, true, coord);
    }
    return shipFactory(length, hits, false, coord);
  };
  return {
    length, hits, sunk, coord, hit, isSunk,
  };
};

export default shipFactory;
