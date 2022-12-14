import boardFactory from '../factories/boardFactory';

const newBoard = boardFactory();
const board = [];
for (let i = 0; i < 100; i += 1) {
  board.push(null);
}

test('Test new board creation', () => {
  const expected = { board: [...board], ships: [] };
  expect(newBoard).toMatchObject(expected);
});

test('Test place ships function horizontal', () => {
  board[21] = 'S';
  board[22] = 'S';
  board[23] = 'S';
  const expected = { board: [...board], ships: [{ length: 3, hits: 0, sunk: false }] };
  newBoard.placeShips(3, 21, 'horizontal');
  expect(newBoard).toMatchObject(expected);
});

test('Test place ships function vertically', () => {
  board[25] = 'S';
  board[35] = 'S';
  board[45] = 'S';
  const expected = {
    board: [...board],
    ships: [{ length: 3, hits: 0, sunk: false }, { length: 3, hits: 0, sunk: false }],
  };
  newBoard.placeShips(3, 25, 'vertical');
  expect(newBoard).toMatchObject(expected);
});

test('Test receiveAttack function', () => {
  newBoard.receiveAttack(21);
  newBoard.receiveAttack(55);
  expect(newBoard.board[21]).toBe('H');
  expect(newBoard.ships[0].hits).toBe(1);
  expect(newBoard.board[55]).toBe('M');
  expect(newBoard.ships[1].hits).toBe(0);
});

test('Test allSunk function', () => {
  expect(newBoard.allSunk()).toBeFalsy();
  newBoard.receiveAttack(22);
  newBoard.receiveAttack(23);
  newBoard.receiveAttack(25);
  newBoard.receiveAttack(35);
  newBoard.receiveAttack(45);
  expect(newBoard.allSunk()).toBeTruthy();
});

test('Board reset', () => {
  newBoard.boardReset();
  expect(newBoard.allSunk()).toBeFalsy();
  newBoard.placeShips(3, 21, 'horizontal');
  newBoard.receiveAttack(21);
  newBoard.receiveAttack(22);
  newBoard.receiveAttack(23);
  expect(newBoard.allSunk()).toBeTruthy();
});
