function findMinNode(_root)
{
    
    if(_root.left === null)
        return _root;
    else
        return findMinNode(_root.left);
}

export function removeNode(_root, _value)
{
         

    if(_root === null)
        return null;
 

    else if(_value < _root.data)
    {
        _root.left = removeNode(_root.left, _value);
        return _root;
    }
 

    else if(_value > _root.data)
    {
        _root.right = removeNode(_root.right, _value);
        return _root;
    }

    else
    {
        if(_root.left === null && _root.right === null)
        {
            _root = null;
            return _root;
        }
 

        if(_root.left === null)
        {
            _root = _root.right;
            return _root;
        }
         
        else if(_root.right === null)
        {
            _root = _root.left;
            return _root;
        }

        var aux = findMinNode(_root.right);
        _root.data = aux.data;
 
        _root.right = removeNode(_root.right, aux.data);
        return _root;
    }
 
}