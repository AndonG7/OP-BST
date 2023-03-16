export function preOrder(_root) { 
    console.log(_root.data) 
    _root.left && preOrder(_root.left) 
    _root.right && preOrder(_root.right) 
  } 