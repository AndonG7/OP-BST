import { buildTree } from "./buildTree.js";
import { Tree } from "./Tree.js";

//Declaring new Array
let newArr = [];

//Filling that array in increasing order
function inOrder(_root) {
    _root.left && inOrder(_root.left);
    newArr.push(_root.data);
    _root.right && inOrder(_root.right);
} 

//Rebalancing function
export function rebalance(_root, _balanced) {
    //If the tree is already balanced, exit
    if (_balanced) {
        console.log("Tree is balanced!");
        return;
    }

    //Calling the function that fills the array
    inOrder(_root);

    //Creating new tree that is balanced
    let t2 = new Tree(newArr);

    return t2.root;
}