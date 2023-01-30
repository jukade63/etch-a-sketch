const grid = document.querySelector(".grid");
const modes = document.querySelectorAll("button");
const sizeSlider = document.querySelector(".slider");
const resolution = document.querySelector("#rangevalue");
let color = "black";
let size = 16;
let click = false;

modes.forEach((mode) => mode.addEventListener("click", changeColor));
sizeSlider.value = size;

sizeSlider.onchange = (e) => {
  size = e.target.value;
  resolution.innerHTML = `${size} x ${size}`;
  grid.innerHTML = "";
  buildEmptyGrid();
};

function changeColor(e) {
  value = e.target.value;
  if (value === "random") color = "random";
  else if (value === "black") color = "black";
  else if (value === "erase") color = "white";
  else if (value === "reset")
    grid
      .querySelectorAll("div")
      .forEach((block) => (block.style.background = "white"));
}

function buildEmptyGrid() {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr )`;

  for (let i = 0; i < size * size; i++) {
    const newGrid = document.createElement("div");
    newGrid.addEventListener("mouseover", drawPixel);
    grid.appendChild(newGrid);
  }
}

function drawPixel() {
  if (click) {
    if (color === "random")
      this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    else this.style.background = color;
  }
}

document.querySelector('body').addEventListener('click', function(e){
    if(e.target !== 'button') click = !click
})

buildEmptyGrid();
