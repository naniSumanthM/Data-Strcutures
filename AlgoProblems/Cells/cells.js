// There is a colony of 8 cells arranged in a straight line where each day every cell competes with its adjacent cells(neighbour).Each day, for each cell, if its neighbours are both active or both inactive, the cell becomes inactive the next day,.otherwise it becomes active the next day.
// Assumptions: The two cells on the ends have single adjacent cell, so the other adjacent cell can be assumsed to be always inactive.Even after updating the cell state.consider its pervious state for updating the state of other cells.Update the cell informationof allcells simultaneously.
// Write a fuction cellCompete which takes takes one 8 element array of integers cells representing the current state of 8 cells and one integer days representing te number of days to simulate.An integer value of 1 represents an active cell and value of 0 represents an inactive cell.

// TESTCASES 1:
// INPUT:
// [1, 0, 0, 0, 0, 1, 0, 0], 1
// EXPECTED RETURN VALUE:
// [0, 1, 0, 0, 1, 0, 1, 0]

// TESTCASE 2:
// INPUT:
// [1, 1, 1, 0, 1, 1, 1, 1,], 2
// EXPECTED RETURN VALUE:
// [0, 0, 0, 0, 0, 1, 1, 0]

let cellState = (cells, days) => {
  let newCells = [];

  for (let k = 0; k < days; k++) {
    for (let i = 0; i < cells.length; i++) {
      let nextCell;
      let prevCell;
      let activenumber;

      if (i == 0) {
        nextCell = cells[1];
        prevCell = 0;
      } else if (i == cells.length - 1) {
        prevCell = cells[cells.length - 2];
        nextCell = 0;
      } else {
        nextCell = cells[i + 1];
        prevCell = cells[i - 1];
      }

      if (nextCell == prevCell) {
        activenumber = 0;
      } else {
        activenumber = 1;
      }
      newCells[i] = activenumber;
    }
    //reload the cells to the previous day
    for (let i = 0; i < 8; i++) {
      cells[i] = newCells[i];
    }
  }
  return newCells;
};

console.log(cellState([1, 1, 1, 0, 1, 1, 1, 1], 2));
