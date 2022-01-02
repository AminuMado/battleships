const createShip = require("../ship.js");

describe("Ship", () => {
  const destroyer = createShip(0, 5, "right");

  test("defines Destroyer ship", () => {
    expect(typeof destroyer).toBe("object");
  });
  test("defines getBody()", () => {
    expect(typeof destroyer.getBody).toBe("function");
  });
  test("case 1 getBody()", () => {
    expect(destroyer.getBody()).toStrictEqual([0, 1, 2, 3, 4]);
  });

  test("case 1 isHit(4)", () => {
    destroyer.isHit(4);
    expect(destroyer.getHealth()).toStrictEqual([
      false,
      false,
      false,
      false,
      true,
    ]);
  });
  test("case 1 isSunk()", () => {
    expect(destroyer.isSunk()).toBe(false);
  });
  test("case 2 isSunk()", () => {
    destroyer.isHit(0);
    destroyer.isHit(1);
    destroyer.isHit(2);
    destroyer.isHit(3);
    destroyer.isHit(4);
    expect(destroyer.isSunk()).toBe(true);
  });
});
