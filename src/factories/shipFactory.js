const shipFactory = (length, hits, sunk, coord = []) => {
  const hit = () => shipFactory(length, hits + 1, sunk);
  const isSunk = () => {
    if (hits === length) {
      return shipFactory(length, hits, true);
    }
    return shipFactory(length, hits, false);
  };
  return {
    length, hits, sunk, coord, hit, isSunk,
  };
};

export default shipFactory;
