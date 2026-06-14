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
  currentColor = event.target.value;
});

let isDrawing = false;

gridContainer.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("grid-cell")) {
    isDrawing = true;
    event.target.style.backgroundColor = currentColor;
  }
});

gridContainer.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("grid-cell") && isDrawing) {
    event.target.style.backgroundColor = currentColor;
  }
});

gridContainer.addEventListener("mouseup", (event) => {
  if (event.target.classList.contains("grid-cell") && isDrawing) {
    event.target.style.backgroundColor = currentColor;
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
