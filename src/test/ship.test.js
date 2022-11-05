import shipFactory from '../factories/shipFactory';

test('Test returned object form factory', () => {
  const expected = { length: 3, hits: 1, sunk: false };
  expect(shipFactory(3, 1, false)).toMatchObject(expected);
});

test('Test function isSunk', () => {
  const obj = shipFactory(4, 3, false);
  const obj1 = obj.hit();
  const expected = { length: 4, hits: 4, sunk: true };
  expect(obj1.isSunk()).toMatchObject(expected);
});

test('Test function hit', () => {
  const obj = shipFactory(4, 2, false);
  const expected = { length: 4, hits: 3, sunk: false };
  expect(obj.hit()).toMatchObject(expected);
});
