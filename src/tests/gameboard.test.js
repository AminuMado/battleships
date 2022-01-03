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
    expect(myBoard.getGameBoard()[10]).toStrictEqual("aircraft");
    expect(myBoard.getGameBoard()[12]).toStrictEqual("aircraft");
    expect(myBoard.getGameBoard()[14]).toStrictEqual("aircraft");
    expect(myBoard.getGameBoard()[22]).toStrictEqual("battleship");
    expect(myBoard.getGameBoard()[52]).toStrictEqual("battleship");
    expect(myBoard.getGameBoard()[90]).toStrictEqual("submarine");
    expect(myBoard.getGameBoard()[92]).toStrictEqual("submarine");
    expect(myBoard.getGameBoard()[66]).toStrictEqual("destroyer");
    expect(myBoard.getGameBoard()[76]).toStrictEqual("destroyer");
    expect(myBoard.getGameBoard()[99]).toStrictEqual(null);
  });
  test("defines receiveAttack()", () => {
    expect(typeof myBoard.receiveAttack).toBe("function");
  });
  test("case 1, hit receiveAttack(50)", () => {
    myBoard.receiveAttack(10);
    myBoard.receiveAttack(11);
    myBoard.receiveAttack(12);
    myBoard.receiveAttack(13);
    myBoard.receiveAttack(14);
    expect(myBoard.getGameBoard()[10]).toBe(1);
    //also change the health of the coordinate on the ship that was hit
    // for example lets say a destroyer was at [50,51]
    // destroyer health [false,false] initially
    // after reveiveAttack(50) expect destroyer.health [true,false]
    // ships[0].getHealth() to be [true,false]
    expect(myBoard.getShips()[0].getHealth()).toStrictEqual([
      true,
      true,
      false,
      true,
      true,
    ]);
  });
  // test("case 2, miss receiveAttack(50)", () => {
  //   expect(myBoard.getGameBoard()[99]).toBe(0);
  // });
});
