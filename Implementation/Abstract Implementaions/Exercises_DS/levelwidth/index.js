// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

let levelWidth = root => {
  const array = [root, "s"];
  const widths = [0];

  while (array.length > 1) {
    const node = array.shift();
    if (node === "s") {
      widths.push(0);
      array.push("s");
    } else {
      for (let child of node.children) {
        array.push(child);
      }
      widths[widths.length - 1]++;
    }
  }

  return widths;
};

module.exports = levelWidth;
