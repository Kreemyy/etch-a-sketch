function createGrid(size = 97) {
  const gridContainer = document.querySelector(".js-grid-container");
  const widthPercent = 100 / size;

  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-cell");
    grid.style.width = widthPercent + "%";
    gridContainer.appendChild(grid);
  }
}

createGrid(64);
