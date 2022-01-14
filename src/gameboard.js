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
  buildBoard();

  function getGameBoard() {
    return gameBoard;
  }

  function getShips() {
    return ships;
  }

  function buildBoard() {
    gameBoard = new Array(width * height).fill(null);
  }

  function placeShip(ship) {
    const shipName = ship.getName();
    const shipCoordinate = ship.getBody();
    shipCoordinate.forEach((element) => {
      gameBoard[element] = shipName;
    });
    ships.push(ship);
  }

  function hit(coordinate) {
    gameBoard[coordinate] = 1;
  }

  function miss(coordinate) {
    gameBoard[coordinate] = 0;
  }

  function receiveAttack(coordinate) {
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
  }

  function allShipsSunk() {
    let result = ships.every((ship) => ship.isSunk() === true);
    return result;
  }
  return { getGameBoard, getShips, receiveAttack, placeShip, allShipsSunk };
}
export { createGameBoard };
// module.exports = createGameBoard;
