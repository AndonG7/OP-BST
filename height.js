function findMax(a, b){
    if(a >= b)
      return a;
    else
      return b;
}
  
export function findHeight(_root){
    // Base case:
    if(_root === null)
      return 0;
  
    return findMax(findHeight(_root.left), findHeight(_root.right)) + 1;
}