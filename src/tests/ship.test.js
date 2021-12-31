const Ship = require("../ship.js");

describe("Ship", () => {
  const destroyer = new Ship();

  test("defines Destroyer ship", () => {
    expect(typeof destroyer).toBe("object");
  });
  test("defines coordinate()", () => {
    expect(typeof destroyer.coordinate).toBe("function");
  });
  test("case 1 right coordinate([0,1],5,'right')", () => {
    expect(destroyer.coordinate([0, 1], 5, "right")).toStrictEqual([
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
    ]);
  });
  test("case 2 down coordinate([0,1],5,'down')", () => {
    expect(destroyer.coordinate([0, 1], 5, "down")).toStrictEqual([
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
    ]);
  });
  test("case 1 isHit() of a test body", () => {
    expect(destroyer.isHit()).toStrictEqual([true, false, false, false, false]);
  });
  // test("case 1 isSunk()", () => {
  //   expect(destroyer.isSunk()).toBe(true);
  // });
});
