import { createGameBoard } from "./gameboard.js";

function createPlayer(name, type, width, height) {
  let gameBoard = createGameBoard(width, height);

  function getName() {
    return name;
  }
  function getType() {
    return type;
  }
  function getGameBoard() {
    return gameBoard;
  }
  return { getName, getType, getGameBoard };
}
export { createPlayer };
// module.exports = createPlayer;
