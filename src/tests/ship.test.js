const createShip = require("../ship.js");

describe("Ship", () => {
  const destroyer = createShip([0, 0], 5, "right");

  test("defines Destroyer ship", () => {
    expect(typeof destroyer).toBe("object");
  });
  test("defines getBody()", () => {
    expect(typeof destroyer.getBody).toBe("function");
  });
  test("case 1 getBody()", () => {
    expect(destroyer.getBody()).toStrictEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ]);
  });

  test("case 1 isHit([0,4])", () => {
    expect(destroyer.isHit([0, 3])).toStrictEqual([
      false,
      false,
      false,
      true,
      false,
    ]);
  });
  test("case 1 isSunk()", () => {
    expect(destroyer.isSunk()).toBe(false);
  });
  test("case 2 isSunk()", () => {
    destroyer.isHit([0, 0]);
    destroyer.isHit([0, 1]);
    destroyer.isHit([0, 2]);
    destroyer.isHit([0, 3]);
    destroyer.isHit([0, 4]);
    expect(destroyer.isSunk()).toBe(true);
  });
});
