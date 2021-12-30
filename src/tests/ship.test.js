const Ship = require("../ship.js");

describe("Ship", () => {
  const destroyer = new Ship();

  test("defines Destroyer ship", () => {
    expect(typeof destroyer).toBe("object");
  });
  test("defines coordinate()", () => {
    expect(typeof destroyer.coordinate).toBe("function");
  });
});
