let cellState = cells => {
  cells[-1] = 0;
  cells[8] = 0;
  let active = 1;
  let inactive = 0;
  let tempCells = [];

  for (let i = 0; i < cells.length - 1; i++) {
    if (cells[i - 1] === inactive && cells[i + 1] === inactive) {
      cells[i] == inactive;
      tempCells.push(cells[i]);
    } else if (cells[i - 1] === active && cells[i + 1] === active) {
      cells[i] == inactive;
      tempCells.push(cells[i]);
    } else {
      cells[i] = active;
      tempCells.push(cells[i]);
    }
  }

  return tempCells;
};

console.log(cellState([1, 0, 0, 0, 0, 1, 0, 0]));

//I = [1, 0, 0, 0, 0, 1, 0, 0]
//A = [0, 1, 0, 0, 1, 0, 1, 0]
//O = [0, 0, 0, 0, 1, 0, 0, 0]
