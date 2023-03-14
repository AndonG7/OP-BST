export function find (_root, _value) {
    if(_value < _root.data)
    {
        if(_root.left.data === _value)
            return _root.left;
        else
            find(_root.left, _value);
    }
    else
    {
        if(_root.right === _value)
            return _root.right;
        else
            find(_root.right, _value);
    }
}