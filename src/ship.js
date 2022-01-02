function createShip(head, length, direction) {
  let health = new Array(length).fill(false);
  let body = [];
  let name = null;
  buildBody(head, length, direction);
  setName(length);

  function buildBody(head, length, direction) {
    switch (direction) {
      case "horizontal":
        for (let i = 0; i < length; i++) {
          body.push(head + i);
        }
        break;
      case "vertical":
        for (let i = 0; i < length; i++) {
          body.push(head + i * 10);
        }
        break;
      default:
        return;
    }
  }

  function isHit(coordinate) {
    for (let i = 0; i < body.length; i++) {
      if (coordinate == body[i]) {
        let idx = i;
        health[idx] = true;
        break;
      }
    }
  }

  function getBody() {
    return body;
  }

  function getHealth() {
    return health;
  }
  function getName() {
    return name;
  }
  function setName(length) {
    switch (length) {
      case 2:
        name = "destroyer";
        break;
      case 3:
        name = "submarine";
        break;
      case 4:
        name = "battleship";
        break;
      case 5:
        name = "aircraft";
        break;
      default:
        name = "default Name";
        return;
    }
  }
  function isSunk() {
    let result = health.every((e) => e === true);
    return result;
    // code above does this
    //   let sank = true;
    //   for (let i = 0; i < health.length; i++) {
    //     if (health[i] == false) {
    //       sank = false;
    //       break;
    //     }
    //   }
    //   return sank;
    // }
  }

  return { getName, getBody, getHealth, isHit, isSunk };
}
export { createShip };
module.exports = createShip;

// class Ship {
//   constructor(head, length, direction) {
//     this.head = head;
//     this.length = length;
//     this.direction = direction;
//   }
//   health = new Array(this.length).fill(false);

//   //to find the index of an item you can use .indexOf() in javascript
//   coordinate(head, length, direction) {
//     //direction could be right and down only
//     //right
//     // for example a head at position [0,1] with a length of 5
//     // we are expecting
//     // [0,1],[0,2],[0,3],[0,4],[0,5]
//     // loop five times
//     // first element remains constant
//     // second element changes by an increment of 1
//     //
//     let body = [];

//     switch (direction) {
//       case "right":
//         for (let i = 0; i < length; i++) {
//           body.push([head[0], head[1] + i]);
//         }
//         break;
//       case "down":
//         for (let i = 0; i < length; i++) {
//           body.push([head[0] + i, head[1]]);
//         }
//         break;
//       default:
//         return;
//     }
//     return body;
//   }
//   isHit(coordinate) {
//     // check if the coordinate is equal to a point in the body
//     // if yes get the index of the part that was hit
//     // change that part of the index to true
//     // This just changes the health array
//     let testBody = [
//       [0, 1],
//       [0, 2],
//       [0, 3],
//       [0, 4],
//       [0, 5],
//     ];

//     let idx = 0;
//     let health = [false, false, false, false, false];
//     for (let i = 0; i < testBody.length; i++) {
//       if (testBody[i][0] == coordinate[0] && testBody[i][1] == coordinate[1]) {
//         idx = i;
//       }
//     }
//     health[idx] = true;
//     return health;
//   }
//   isSunk() {
//     //this returns a true or false
//     // by default it's a false
//     // it's only true when the health array is all true
//     // loop through each element of the health array and if they are all true return true else return false
//     for (let i = 0; i < this.health.length; i++) {
//       if (this.health[i] == false) {
//         return false;
//       } else return true;
//     }
//   }
// }
