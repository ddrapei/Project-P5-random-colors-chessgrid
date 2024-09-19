let colors = ["white", "black", "green", "pink", "yellow", "orange", "red", "grey", "azure"];
let squareSize = Math.floor(Math.random() * 100);
let xSq = 0;
let ySq = 0;
let widthTill = prompt("Number of till horizontally:");
let heightTill = prompt("Number of till vertically:");
widthTill = Number(widthTill);
heightTill = Number(heightTill);
let randomColor = [];
let m = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  for (let i = 0; i < widthTill * heightTill; i++) {
    let randomIndex = Math.floor(Math.random() * colors.length);
    if(i > 0 && colors[randomIndex] === randomColor[i - 1]){
      continue;
    } else {
      randomColor.push(colors[randomIndex]);
    };
  }
}

function draw() {
  background(255);

  let n = 0;

  for (let i = 0; i < widthTill; i++){
    for (let j = 0; j < heightTill; j++){
        fill(randomColor[n]);
        square(i*squareSize, j*squareSize, squareSize);
        n++;
    } 
  }
}
