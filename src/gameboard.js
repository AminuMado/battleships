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

  /// for example
  //   board [0 0 0 0 0
  //          1 s1 0 0
  //          0  0 s2 s2
  //          ]
  function buildBoard() {
    gameBoard = new Array(width * height).fill(null);
  }

  function placeShip(head, length, direction) {
    const ship = createShip(head, length, direction);
    const shipName = ship.getName();
    const shipCoordinate = ship.getBody();
    shipCoordinate.forEach((element) => {
      gameBoard[element] = shipName;
    });
  }
  function receiveAttack(coordinate) {
    //if gameboard[coordinate] != null{
    //this is a hit
    //   if (gameboard[coordinate] == destroyer){
    //       destroyer.isHit(coordinate)
    //   }
    // find which ship was hit
    // call a isHit on the ship
    // change postion to 1
    //}
    //gameboard[coordinate]
    // this is responsible for placing shots on the gameboard
    // a shot is denoted with 0 or 1 with 0 denoting a miss and 1 denoting a hit
    // logic here is it only changes a null to a 0
    // and only changes a ship to a 1
  }
  function allShipsSunk() {
    // just call is sunk for each individual ship
    // the function call returns a true or a false and if
    // they are all true then all ships are sunk
  }
  return { gameBoard, ships, receiveAttack, placeShip, getShips };
}

module.exports = createGameBoard;
