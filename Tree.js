import { buildTree } from "./buildTree.js";
export class Tree {
    constructor (array) {
        this.start = 0;
        this.end = array.length-1;
        this.root = buildTree(array, this.start, this.end);
    }
}