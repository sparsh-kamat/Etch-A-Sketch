const reset = document.getElementById("reset");
const black = document.getElementById("black");
const eraser = document.getElementById("eraser");
const rainbow = document.getElementById("rainbow");
const clear = document.getElementById("clear");

//get heigh of container in pixels very accurately
const container = document.getElementsByClassName("container");
const containerHeight = container[0].clientHeight;

//create grid function
function createGrid(rows, columns) {
  const container = document.getElementById("grid");
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  for (c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  console.log(containerHeight);
  //set height and width of grid items
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.style.height = containerHeight / rows / 1.5;
    gridItem.style.width = gridItem.style.height;
  });

  const controoler = document.getElementsByClassName("controls");
  //   make controoler height equal to grid height
  controoler[0].style.height = containerHeight / 1.5 + (1* rows) + "px";
}

//reset grid function
function resetGrid() {
  const container = document.getElementById("grid");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//create grid on page load
createGrid(16, 16);

//reset grid on button click
reset.addEventListener("click", function () {
  resetGrid();
  //ask for new grid size
  let gridSize = prompt("How many squares per side?");
  //check if grid size is empty
  if (gridSize === "") {
    gridSize = 16;
  }

  createGrid(gridSize, gridSize);
});

//change color on mouseover
black.addEventListener("click", function () {
  const cells = document.querySelectorAll(".grid-item");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "black";
    });
  });
});

//change color on mouseover
eraser.addEventListener("click", function () {
  const cells = document.querySelectorAll(".grid-item");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "white";
    });
  });
});

//change color on mouseover
rainbow.addEventListener("click", function () {
  const cells = document.querySelectorAll(".grid-item");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )})`;
    });
  });
});

//clear grid on button click
clear.addEventListener("click", function () {
    const cells = document.querySelectorAll(".grid-item");
    
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
    });

