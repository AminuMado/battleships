import createShip from "./ship.js";

// gameboard factory
// Note that we have not yet created any User Interface. We should know our code is coming together by running the tests.
// You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship
// And then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

function createGameBoard(width, height) {
  let gameBoard = [];
  let ships = [];

  const getGameBoard = () => gameBoard;
  const getShips = () => ships;
  const buildBoard = () => (gameBoard = new Array(width * height).fill(null));
  const hit = (coordinate) => (gameBoard[coordinate] = 1);
  const miss = (coordinate) => (gameBoard[coordinate] = 0);

  const placeShip = (ship) => {
    const shipName = ship.getName();
    const shipCoordinate = ship.getBody();
    shipCoordinate.forEach((element) => {
      gameBoard[element] = shipName;
    });
    ships.push(ship);
  };

  const receiveAttack = (coordinate) => {
    let location = gameBoard[coordinate];
    if (location !== null) {
      if (location !== 1 || location !== 0) {
        for (const ship of ships) {
          let name = ship.getName();
          if (location === name) {
            ship.isHit(coordinate);
            hit(coordinate);
            break;
          }
        }
      }
      return;
    } else miss(coordinate);
  };

  const allShipsSunk = () => {
    let result = ships.every((ship) => ship.isSunk() === true);
    return result;
  };
  const reset = () => {
    gameBoard = [];
    buildBoard();
    ships = [];
  };
  buildBoard();
  return {
    getGameBoard,
    getShips,
    receiveAttack,
    placeShip,
    allShipsSunk,
    reset,
  };
}
export { createGameBoard };
// module.exports = createGameBoard;
