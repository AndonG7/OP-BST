import { findHeight } from "./height.js";

export function isBalanced(_root) {
    // for height of left subtree
    let lh;
 
    // for height of right subtree
    let rh;
 
    // If tree is empty then return true
    if (_root == null)
        return true;
 
    // Get the height of left and right sub trees
    lh = findHeight(_root.left);
    rh = findHeight(_root.right);
 
    if (Math.abs(lh - rh) <= 1 && isBalanced(_root.left)
        && isBalanced(_root.right))
        return true;
 
    // If we reach here then tree is not height-balanced
    return false;
}