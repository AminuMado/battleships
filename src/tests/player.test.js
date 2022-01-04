const createPlayer = require("../player.js");
describe("player", () => {
  const player1 = createPlayer("Aminu", "human", 10, 10);

  test("defines player1", () => {
    expect(typeof player1).toBe("object");
  });
  test("defines player1 name", () => {
    expect(player1.getName()).toBe("Aminu");
  });
  test("defines player1 type", () => {
    expect(player1.getType()).toBe("human");
  });
  test("defines player1 gameBoard", () => {
    expect(typeof player1.getGameBoard()).toBe("object");
  });
});
