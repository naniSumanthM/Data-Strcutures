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

console.log();
