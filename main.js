import { Tree } from "./Tree.js";
import { prettyPrint } from "./prettyPrint.js";
import { insert } from "./insert.js";
import { removeNode } from "./remove.js";
import { find } from "./find.js";
import { levelOrder } from "./leverOrder.js";
import { inOrder } from "./inOrder.js";
const t1 = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Displaying BST
prettyPrint(t1.root);

//Inserting node
insert(t1.root, 11);

//Displaying BST
prettyPrint(t1.root);

//Removing node
removeNode(t1.root, 5);

//Displaying BST
prettyPrint(t1.root);

//Find function
console.log(find(t1.root, 3));

//Level Order
levelOrder(t1.root);

//In Order
console.log("In Order:");
inOrder(t1.root);
 