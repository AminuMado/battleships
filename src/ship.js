class Ship {
  constructor(head, direction, length) {
    this.head = head;
    this.direction = direction;
    this.length = length;
  }
  body = [];
  health = new Array(this.length).fill(false);
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
    for (let i = 0; i < length; i++) {
      body.push([head[0], head[1] + i]);
    }
  }
}
module.exports = Ship;
