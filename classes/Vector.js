export class Vector {
  constructor(x, y, p = p5.instance) {
    this.x = x;
    this.y = y;
    this.p = p;
    this.vector = (this.p = p).createVector(x, y);
  }
}