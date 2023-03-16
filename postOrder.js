export function postOrder(_root) { 
    _root.left && postOrder(_root.left) 
    _root.right && postOrder(_root.right) 
    console.log(_root.data); 
} 