import { buildTree } from "./buildTree.js";
import { Tree } from "./Tree.js";

let newArr = [];

function inOrder(_root) {
    _root.left && inOrder(_root.left);
    newArr.push(_root.data);
    _root.right && inOrder(_root.right);
} 



export function rebalance(_root, _balanced) {
    if (_balanced) {
        console.log("Tree is balanced!");
        return;
    }

    inOrder(_root);

    let t2 = new Tree(newArr);

    return t2.root;
}