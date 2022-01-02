const createGameBoard = require("../gameboard.js");
const createShip = require("../ship.js");
describe("gameBoard", () => {
  const myBoard = createGameBoard(10, 10);

  test("defines gameBoard", () => {
    expect(typeof myBoard).toBe("object");
  });
  test("defines getShip()", () => {
    expect(typeof myBoard.getShips).toBe("function");
  });
  test("case 1 getShip()", () => {
    expect(myBoard.getShips()).toStrictEqual({
      aircraft: [10, 11, 12, 13, 14],
      battleship: [22, 32, 42, 52],
      cruiser: [90, 91, 92],
      submarine: [77, 87, 97],
      destroyer: [66, 67],
    });
  });
});
