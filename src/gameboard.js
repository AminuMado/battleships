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
  let gameboard = [];
  let ships = {};
  buildBoard();
  /// for example
  //   board [0 0 0 0 0
  //          1 s1 0 0
  //          0  0 s2 s2
  //          ]
  function buildBoard() {
    gameboard = new Array(width * height).fill(null);
  }
  function getShips() {
    // you get the ships from the ship factory
    // save their coordinates in a ships array or object
    // these ships are an aircraft carrier, battleship, cruiser, submarine, and destroyer
    const aircraft = createShip(10, 5, "right").getBody();
    const battleship = createShip(22, 4, "down").getBody();
    const cruiser = createShip(90, 3, "right").getBody();
    const submarine = createShip(77, 3, "down").getBody();
    const destroyer = createShip(66, 2, "right").getBody();
    ships = { aircraft, battleship, cruiser, submarine, destroyer };
    return ships;
    // // { aircraft: [10,11,12,13,14];
    //      battleship: [22,32,42,52];
    //         cruiser: [90,91,92];
    //         submarine:[77,87,97];
    //         destroyer: [66,68]
    //     }
    // or a ship is just [[10,11,12,13,14],[22,32,42,52],[90,91,92],[77,87,97],[66,68]]
  }
  function placeShips() {
    //all you do is place the ships coordinate on the gameboard
    // ships should be denoted with a ship name
    // get the position of the ship from its body
    // place the postion of the ship on the gameboard
    // eg destroyer.getBody() = [3,4,5,6,7]
    // gameboard[3] = destroyer
    // gameboard[4] = destroyer
    // gameboard[5] = destroyer
    // gameboard[6] = destroyer
    // gameboard[7] = destroyer
    // take the value of the ship in the array
    // use the value as the index and place the ship name there
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
  return { gameboard, receiveAttack, placeShips, getShips };
}

module.exports = createGameBoard;
