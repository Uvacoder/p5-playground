import { Vector } from './classes/Vector.js';

const width = window.innerWidth;
const height = window.innerHeight;

const centerH = height / 2;

const centerW = width / 2;

let horizon = getRand(0, height);

let leftX = getRand(0, width / 2);
let rightX = getRand(width / 2, width);

const vp1 = [leftX, horizon];
const vp2 = [rightX, horizon];

const leftConverging = generateConvergingLines(vp1, getRand(0, 200));
const rightConverging = generateConvergingLines(vp2, getRand(0, 200));



window.setup = function() {
  const myVec = new Vector(leftX, rightX, p5.instance);
  console.log(myVec);
  createCanvas(width, height, SVG);
  noLoop();
  background(10, 20, 30);
}

window.draw = function() {
  console.log(leftX);
  stroke(255);
  strokeWeight(5);
  point(vp1[0], vp1[1]);
  point(vp2[0], vp2[1]);

  push()
    strokeWeight(1);
    leftConverging.forEach((lo) => {
      line(lo.x1, lo.y1, lo.x2, lo.y2);
    });
    rightConverging.forEach((lo) => {
      line(lo.x1, lo.y1, lo.x2, lo.y2);
    })
  pop();
}

/* UTILS */
function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateConvergingLines(vanishingPoint, numberOfLines) {
  let convergingLines = [];
  for(let i = 0; i <= numberOfLines; i++) {
    convergingLines.push({
      x1: vanishingPoint[0],
      y1: vanishingPoint[1],
      x2: getRand(0, width * 2),
      y2: getRand(0, width * 2),
    })
  }

  return convergingLines;
}