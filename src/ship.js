class Ship {
  constructor(head, length, direction) {
    this.head = head;
    this.length = length;
    this.direction = direction;
    this.health = new Array(this.length).fill(false);
  }
  randomshit = 22;
  //to find the index of an item you can use .indexOf() in javascript
  coordinate(head, length, direction) {
    //direction could be right and down only
    //right
    // for example a head at position [0,1] with a length of 5
    // we are expecting
    // [0,1],[0,2],[0,3],[0,4],[0,5]
    // loop five times
    // first element remains constant
    // second element changes by an increment of 1
    //
    let body = [];

    switch (direction) {
      case "right":
        for (let i = 0; i < length; i++) {
          body.push([head[0], head[1] + i]);
        }
        break;
      case "down":
        for (let i = 0; i < length; i++) {
          body.push([head[0] + i, head[1]]);
        }
        break;
      default:
        return;
    }
    return body;
  }
  isHit() {
    // check if the coordinate is equal to a point in the body
    // if yes get the index of the part that was hit
    // change that part of the index to true
    // This just changes the health array
    let testBody = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
    ];
    let idx = testBody.indexOf([0, 1]);
    this.health[idx] = true;
  }
  isSunk() {
    //this returns a true or false
    // by default it's a false
    // it's only true when the health array is all true
    // loop through each element of the health array and if they are all true return true else return false
    for (let i = 0; i < this.health.length; i++) {
      if (this.health[i] == false) {
        return false;
      } else return true;
    }
  }
}
module.exports = Ship;
