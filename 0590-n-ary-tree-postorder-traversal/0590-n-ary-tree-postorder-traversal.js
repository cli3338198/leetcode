/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = []
    dfs(root)
    return res
    
    function dfs(root) {
        if (!root) return
        for (const child of root.children) {
            dfs(child)
        }
        res.push(root.val)
    }
};

postorder = function(root, res = []) {
    if (!root) return res
    for (const child of root.children) {
        postorder(child, res)
    }
    res.push(root.val)
    return res
}

postorder = function(root) {
    if (!root) return []
    const res = []
    for (const child of root.children) {
        for (const v of postorder(child)) {
            res.push(v)
        }
    }
    res.push(root.val)
    return res
}

postorder = function(root) {
    if (!root) return []
    return [
        ...spread(root.children.map(postorder)),
        root.val
    ]
    
    function spread(arr) {
        const res = [].concat(...arr)
        if (res.some(Array.isArray)) return spread(res)
        return res
    }
}

postorder = function(root) {
    const stack = [root]
    const res = []
    while (stack.length) {
        const root = stack.pop()
        if (!root) continue
        res.push(root.val)
        stack.push(...root.children)
    }
    return res.reverse()
}

postorder = function(root) {
    const res = []
    const stack = [root]
    while (stack.length) {
        const root = stack.pop()
        if (root) {
            res.unshift(root.val)
            for (const child of root.children) {
                stack.push(child)
            }
        }
    }
    return res
}