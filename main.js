import { Tree } from "./Tree.js";
import { prettyPrint } from "./prettyPrint.js";
import { insert } from "./insert.js";
import { removeNode } from "./remove.js";
import { find } from "./find.js";
import { levelOrder } from "./levelorder.js";

const t1 = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

prettyPrint(t1.root);
insert(t1.root, 11);
prettyPrint(t1.root);
removeNode(t1.root, 5);
prettyPrint(t1.root);
console.log(find(t1.root, 3));
console.log(levelOrder(t1.root));
 