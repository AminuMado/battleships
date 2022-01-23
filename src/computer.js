import { dom } from "./dom";
import { createGameBoard } from "./gameboard";
import { createPlayer } from "./createPlayer";
const computerSetup = () => {
  const computer = createPlayer("P2");
  const computerBoard = createGameBoard(10, 10);
  const computerShips = computer.getFleet();
  const board = document.querySelectorAll(".p2-grid-cell");
  // this generates the ships at random locations
  computerShips.forEach((ship) => {
    dom.board.randomize(ship, board);
    dom.board.placeShip(ship, board);
  });
  //this means your ships array have a body in them ready to placed on a board
  computerShips.forEach((computerShip) => {
    computerBoard.placeShip(computerShip);
  });
  computerShips.forEach((ship) => {
    dom.board.clearShip(ship, board);
  });
  return { computer, computerBoard, computerShips };
};
export { computerSetup };
