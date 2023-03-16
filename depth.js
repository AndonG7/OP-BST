export function maxDepth(_root)
{
    if (_root == null)
        return 0;
    else {
        /* compute the depth of each subtree */
        let lDepth = maxDepth(_root.left);
        let rDepth = maxDepth(_root.right);
 
        /* use the larger one */
        if (lDepth > rDepth)
            return (lDepth + 1);
        else
            return (rDepth + 1);
    }
}