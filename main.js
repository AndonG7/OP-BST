import { Tree } from "./Tree.js";
import { prettyPrint } from "./prettyPrint.js";
import { insert } from "./insert.js";
import { removeNode } from "./remove.js";
import { find } from "./find.js";
import { levelOrder } from "./leverOrder.js";
import { inOrder } from "./inOrder.js";
import { postOrder } from "./postOrder.js";
import { preOrder } from "./preOrder.js";
import { findHeight } from "./height.js";
import { maxDepth } from "./depth.js";
import { isBalanced } from "./isBalanced.js";
import { rebalance } from "./rebalance.js";

//Initalizing array from which a new BST will be created
export const t1 = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Displaying BST
console.log("Printing Initial Binary Search Tree:");
prettyPrint(t1.root);

//Inserting node
insert(t1.root, 11);
insert(t1.root, 12);
insert(t1.root, 13);

//Displaying BST
console.log("Printing BST With New Node Inserted (11):");
prettyPrint(t1.root);

//Removing node
removeNode(t1.root, 5);

//Displaying BST
console.log("Printing BST With Removed Node (5):");
prettyPrint(t1.root);

//Find function
console.log("Printing Find Function:");
console.log(find(t1.root, 3));

//Level Order
console.log("Printing Level Order:");
levelOrder(t1.root);

//Pre Order
console.log("Printing Pre Order:");
preOrder(t1.root);

//In Order
console.log("Printing In Order:");
inOrder(t1.root);

//Post Order
console.log("Printing Post Order:");
postOrder(t1.root);

//Height of the BST
console.log("Height of the BST: " + findHeight(t1.root));

//Maximum depth of the BST
console.log("Max Depth: " + maxDepth(t1.root));

//Check if tree is balanced
console.log("Is balanced? " + isBalanced(t1.root));

//If tree is unbalanced, form new balanced tree
console.log("Rebalanced Tree: ");
prettyPrint(rebalance(t1.root, isBalanced(t1.root)));

