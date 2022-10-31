const shipFactory = (length, hits, sunk) => {
  const hit = () => shipFactory(length, hits + 1, sunk);
  const isSunk = () => {
    if (hits === length) {
      return shipFactory(length, hits, true);
    }
    return shipFactory(length, hits, false);
  };
  return {
    length, hits, sunk, hit, isSunk,
  };
};

export default shipFactory;
