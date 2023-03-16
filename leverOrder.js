import { Queue } from "./Queue.js";

export function levelOrder(_root) {
    if (_root===null) return;
    let q = new Queue();
    
    q.enqueue(_root);
    
    while(q.size()>0) {
        let current = q.front();
        console.log(current.data);
        if(current.left != null) q.enqueue(current.left);
        if(current.right != null) q.enqueue(current.right);
        q.dequeue();
    }
}