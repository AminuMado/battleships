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
  function getGameBoard() {
    return gameBoard;
  }
  function getShips() {
    return ships;
  }
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
      //This mean its not an empty spot but it could be an already hit spot or a ship is there or a missed spot
      if (location !== 1 || location !== 0) {
        // This means its a ship at the coordinate
        for (const ship of ships) {
          let name = ship.getName();
          if (location === name) {
            ship.isHit(coordinate);
            hit(coordinate);
            break;
          }
        }
      }
    }
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
  return { getGameBoard, getShips, receiveAttack, placeShip };
}

module.exports = createGameBoard;
