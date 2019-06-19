class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = []
    let queue = []
    queue.push(currentNode)

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list;
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value)

    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }

    return this.breadthFirstSearchR(queue, list)
  }
  depthFirstSearchInorder(queue, list) {
    return traverseInOrder(this.root, []);
  }
  depthFirstSearchPreOrder(queue, list) {
    return traversePreOrder(this.root, []);
  }
  depthFirstSearchPostOrder(queue, list) {
    return traversePostOrder(this.root, []);
  }
}
//left, root, right
let traverseInOrder = (node, list) => {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);

  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}
//root, left, right
let traversePreOrder = (node, list) => {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}
//left, right, root
let traversePostOrder = (node, list) => {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

// console.log('BFS', tree.breadthFirstSearch());
// console.log('BFSr', tree.breadthFirstSearch([tree.root], []));
// console.log('DFS-In:Order', tree.depthFirstSearchInorder());
// console.log('DFS-Pre:Order', tree.depthFirstSearchPreOrder());
// console.log('DFS-Post:Order', tree.depthFirstSearchPostOrder());

//     9
//  4     20
//1  6  15  170

// let traverse = node => {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// };

//left, root, right
let inOrder = (root) => {
  let stack = []
  let list = []
  if (!root) return list

  while (root != null || stack.length > 0) {
    while (root != null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    list.push(root.value)
    root = root.right
  }
  return list;
}
//console.log(inOrder(tree.root));

//root, left, right
let preOrder = (root) => {
  let nodeStack = []
  let list = []
  if (!root) return false
  nodeStack.push(root)

  while (nodeStack.length > 0) {
    let node = nodeStack[nodeStack.length - 1]
    list.push(node.value)
    nodeStack.pop()

    if (node.right != null) {
      nodeStack.push(node.right)
    }
    if (node.left != null) {
      nodeStack.push(node.left)
    }
  }
  return list
}
//console.log(preOrder(tree.root));

//left, right, root
let postOrder = (root) => {
  let nodeStack1 = []
  let nodeStack2 = []
  let list = []

  nodeStack1.push(root);

  while (nodeStack1.length > 0) {
    let node = nodeStack1.pop()
    nodeStack2.push(node)

    if (node.left != null) {
      nodeStack1.push(node.left)
    }
    if (node.right != null) {
      nodeStack1.push(node.right)
    }
  }

  while (nodeStack2.length > 0) {
    let resultNode = nodeStack2.pop()
    list.push(resultNode.value)
  }
  return list;
}
//console.log(postOrder(tree.root));



//Pre-Order Tree Traversal Iterative
let preorder = (root) => {
  const stack = [];
  const result = [];
  if (!root) {
    return result;
  }
  //insert root into stack
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return result;
}

//Pre-Order Tree Traversal Recursive
let preordeRec = (root) => {
  const result = [];
  let traverse = (tree) => {
    if (!tree) {
      return result;
    }
    result.push(tree.val);
    for (let i = 0; i < tree.children.length; i++) {
      traverse(tree.children[i]);
    }
    return result;
  }
  return traverse(root)
}

let postorder = (root) => {
  if (!root) {
    return [];
  }

  let stack = [root];
  let result = [];

  while (stack.length) {
    let node = stack.pop();
    result.unshift(node.val);
    if (!node.children) {
      continue;
    }
    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i]);
    }
  }
  return result;
}

let postordeRec = (root, list = []) => {
  if (!root) {
    return []
  }
  for (let i = 0; i < root.children.length; i++) {
    postorder(root.children[i], list)
  }
  list.push(root.val)
  return list;
};
