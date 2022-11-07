import playerFactory from "../factories/playerFactory";

const player1 = playerFactory(true);

test('Changing turns', () => {
  expect(player1.changeTurn().turn).toBe(false);
});

test('Computer turn', () => {
  expect(player1.computerTurn()).toBeGreaterThanOrEqual(0);
  expect(player1.computerTurn()).toBeLessThan(100);
});
