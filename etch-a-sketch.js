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

gridContainer.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains(grid - cell)) {
  }
});

const clearSketchBtn = document.querySelector(".clear-sketch");
clearSketchBtn.addEventListener("click", () => {});
