import { negOrPos } from '../utils/negOrPos.js';
import { getRand } from '../utils/getRand.js';

const width = window.innerWidth;
const height = window.innerHeight;

const centerH = height / 2;

const centerW = width / 2;

let radii = [];

const maxCircles = 500;

const number = getRand(5, 200);

for(let i = 0; i < number; i++) {
  radii[i] = getRand(1, maxCircles);
}

function setup() {
  createCanvas(width, height, SVG);
  noLoop();
}

function draw() {
  background(10, 20, 30);
  // fill(getRand(0, 255), getRand(0, 255), getRand(0, 255));
  noFill();
  translate(centerW, centerH)
  
  radii.forEach((radius) => {
    stroke(getRand(0, 255), getRand(0, 255), getRand(0, 255));
    strokeWeight(getRand(1, 8));
    push();
      ellipse(getRand(0, (radius * negOrPos()) / 2), getRand(0, (radius * negOrPos()) / 2), radius, radius);
    pop();
  })
  stroke(10, 20, 30);
  strokeWeight(50);
  ellipse(0, 0, 600, 600);
  push()
    fill(10, 20, 30);
    ellipse(0, 0, 100, 100);
  pop();
  console.log(radii);
}
