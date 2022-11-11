import playerFactory from '../factories/playerFactory';

const player1 = playerFactory(true);

test('Changing turns', () => {
  expect(player1.changeTurn().turn).toBe(false);
});

test('Computer turn', () => {
  expect(player1.computerTurn()).toBeGreaterThanOrEqual(0);
  expect(player1.computerTurn()).toBeLessThan(100);
  for (let i = 0; i < 99; i += 1) {
    player1.compVisited.push(i);
  }
  expect(player1.computerTurn()).toBe(99);
});
