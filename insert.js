import { Node } from "./Node.js";

export function insert (_root, _value)
{
    if(_value < _root.data)
    {
        
        if(_root.left === null)
            _root.left = new Node(_value);
        else
            insert(_root.left, _value);
    }
 
    else
    {
        if(_root.right === null)
            _root.right = new Node(_value);
        else
            insert(_root.right, _value);
    }
}
