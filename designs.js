// assign needed attributes to a variable
const size = document.getElementById("sizePicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const grid = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");

// fill the cell with the selected color
function fill() {
    this.setAttribute("style", `background-color: ${color.value}`);
}

// empties an existing grid and makes a new one with chosen size
function makeGrid() {
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < height.value; i++){
        const row = grid.insertRow(i);
        for (let j = 0; j < width.value; j++){
            const cell = row.insertCell(j);
            cell.addEventListener("click", fill);
        }
    }
}

// submit button calls the grid construct function
size.onsubmit = function(e) {
    e.preventDefault();
    makeGrid();
};