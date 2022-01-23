import { createPlayer } from "./createPlayer";
import { createGameBoard } from "./gameboard";
import { dom } from "./dom";
const playerSetup = () => {
  const player = createPlayer("P1");
  const playerBoard = createGameBoard(10, 10);
  const playerShips = dom.getFleet();

  //this means your ships array have a body in them ready to placed on a board
  playerShips.forEach((playerShip) => {
    playerBoard.placeShip(playerShip);
  });
  return { player, playerBoard, playerShips };
};
export { playerSetup };
