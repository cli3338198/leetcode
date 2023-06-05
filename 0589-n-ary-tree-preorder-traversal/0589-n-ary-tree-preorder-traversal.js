/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return []
    const res = []
    res.push(root.val)
    for (const child of root.children) {
        for (const sub of preorder(child)) {
            res.push(sub)
        }
    }
    return res
};

preorder = function(root, res=[]) {
    if (!root) return res
    res.push(root.val)
    root.children.forEach(child => preorder(child, res))
    return res
}

preorder = function(root) {
    if (!root) return []
    const stack = [root], res = []
    while (stack.length) {
        const root = stack.pop()
        res.push(root.val)
        if (root.children.length) {
            while (root.children.length) {
                stack.push(root.children.pop())
            }
        }
    }
    return res
}

preorder = function(root) {
    if (!root) return []
    return [
        root.val,
        ...spread(root.children.map(preorder))
    ]
    
    function spread(arr) {
        const res = [].concat(...arr)
        if (res.some(Array.isArray)) return spread(res)
        return res
    }
}