function createShip(name, length) {
  let health = new Array(length).fill(false);
  let body = [];

  const buildBody = (head, direction) => {
    let builtBody = [];
    switch (direction) {
      case "horizontal":
        for (let i = 0; i < length; i++) {
          builtBody.push(head + i);
        }
        break;
      case "vertical":
        for (let i = 0; i < length; i++) {
          builtBody.push(head + i * 10);
        }
        break;
      default:
        return;
    }
    body = builtBody;
  };

  const isHit = (coordinate) => {
    let result = false;
    for (let i = 0; i < body.length; i++) {
      if (coordinate == body[i]) {
        health[i] = true;
        result = true;
        break;
      }
    }
    return result;
  };
  const isSunk = () => health.every((e) => e === true);
  const getBody = () => body;
  const getName = () => name;
  const getLength = () => length;

  return { getName, getLength, getBody, buildBody, isHit, isSunk };
}
export { createShip };
// module.exports = createShip;
