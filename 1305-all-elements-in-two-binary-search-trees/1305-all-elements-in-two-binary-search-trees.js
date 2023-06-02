/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    return dfs(root1).concat(dfs(root2)).sort((a, b) => a - b)
    
    function dfs(root) {
        if (!root) return []
        return [
            ...dfs(root.left),
            root.val,
            ...dfs(root.right)
        ]
    }
};

getAllElements = function(root1, root2) {
    const a = dfs(root1)
    const b = dfs(root2)
    return merge(a, b)
    
    function merge(a, b) {
        const res = []
        while (a.length && b.length) {
            if (a[0] < b[0]) {
                res.push(a.shift())
            } else {
                res.push(b.shift())
            }
        }
        res.push(...a)
        res.push(...b)
        return res
    }
    
    function dfs(root) {
        const stack = []
        const res = []
        while (root || stack.length) {
            if (root) {
                stack.push(root)
                root = root.left
            } else {
                root = stack.pop()
                res.push(root.val)
                root = root.right
            }
        }
        return res
    }
}