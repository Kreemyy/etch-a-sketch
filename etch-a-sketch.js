const gridContainer = document.querySelector(".js-grid-container");

function createGrid(size = 16) {
  const widthPercent = 100 / size;
  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-cell");
    grid.style.width = widthPercent + "%";
    gridContainer.appendChild(grid);
  }
}

createGrid();
let previousGridSize = 16;

const sizeBtn = document.querySelector(".grid-size-btn");

sizeBtn.addEventListener("click", () => {
  let gridSize = prompt("Enter number of squares per side: 16 - 100", "16");

  if (gridSize === null) {
    gridContainer.textContent = "";
    createGrid(previousGridSize);
  } else if (+gridSize >= 16 && +gridSize <= 100) {
    previousGridSize = gridSize;
    gridContainer.textContent = "";
    createGrid(previousGridSize);
  } else {
    while (+gridSize > 100 || +gridSize < 16 || gridSize === "") {
      gridSize = prompt("Number must be between 16 - 100");
      if (gridSize === null) {
        gridContainer.textContent = "";
        createGrid(previousGridSize);
        break;
      }
    }
  }
});

let currentColor = "black";
const colorInput = document.querySelector(".color-input");

colorInput.addEventListener("input", (event) => {
  randomizeColor = false;
  currentColor = event.target.value;
  randomizeBTn.classList.remove("active");
});

let isDrawing = false;
let randomizeColor = false;

gridContainer.addEventListener("pointerdown", (event) => {
  if (event.target.classList.contains("grid-cell")) {
    isDrawing = true;
    event.target.style.backgroundColor = randomizeColor
      ? generateRandomColor()
      : currentColor;
  }
});

gridContainer.addEventListener("pointermove", (event) => {
  if (!isDrawing) return;

  const element = document.elementFromPoint(event.clientX, event.clientY);
  if (element && element.classList.contains("grid-cell")) {
    element.style.backgroundColor = randomizeColor
      ? generateRandomColor()
      : currentColor;
  }
});

gridContainer.addEventListener("pointerup", (event) => {
  if (event.target.classList.contains("grid-cell") && isDrawing) {
    event.target.style.backgroundColor = randomizeColor
      ? generateRandomColor()
      : currentColor;
    isDrawing = false;
  }
});

const clearSketchBtn = document.querySelector(".clear-sketch");

clearSketchBtn.addEventListener("click", () => {
  const gridCell = document.querySelectorAll(".grid-cell");
  gridCell.forEach((cell) => {
    cell.style.backgroundColor = "#e5e2e6";
  });
});

const randomizeBTn = document.querySelector(".random-color-btn");

randomizeBTn.addEventListener("click", () => {
  randomizeColor = randomizeBTn.classList.contains("active") ? false : true;
  randomizeBTn.classList.toggle("active");
});

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green},${blue})`;
}
