const createGameBoard = require("../gameboard.js");
const createShip = require("../ship.js");
describe("gameBoard", () => {
  const myBoard = createGameBoard(10, 10);

  test("defines gameBoard", () => {
    expect(typeof myBoard).toBe("object");
  });
  test("defines placeShip()", () => {
    expect(typeof myBoard.placeShip).toBe("function");
  });
  test("case 1 placeShip()", () => {
    myBoard.placeShip(10, 5, "horizontal");
    myBoard.placeShip(22, 4, "vertical");
    myBoard.placeShip(90, 3, "horizontal");
    myBoard.placeShip(66, 2, "vertical");
    expect(myBoard.gameBoard[10]).toStrictEqual("aircraft");
    expect(myBoard.gameBoard[12]).toStrictEqual("aircraft");
    expect(myBoard.gameBoard[14]).toStrictEqual("aircraft");
    expect(myBoard.gameBoard[22]).toStrictEqual("battleship");
    expect(myBoard.gameBoard[52]).toStrictEqual("battleship");
    expect(myBoard.gameBoard[90]).toStrictEqual("submarine");
    expect(myBoard.gameBoard[92]).toStrictEqual("submarine");
    expect(myBoard.gameBoard[66]).toStrictEqual("destroyer");
    expect(myBoard.gameBoard[76]).toStrictEqual("destroyer");
    expect(myBoard.gameBoard[99]).toStrictEqual(null);
    //   aircraft: [10, 11, 12, 13, 14],
    //   battleship: [22, 32, 42, 52],
    //   cruiser: [90, 91, 92],
    //   submarine: [77, 87, 97],
    //   destroyer: [66, 67],
    // });
  });
});
