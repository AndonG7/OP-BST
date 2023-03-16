export function inOrder(_root) {
    _root.left && inOrder(_root.left);
    console.log(_root.data);
    _root.right && inOrder(_root.right);
} 