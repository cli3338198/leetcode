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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const a = dfs(root1)
    const b = dfs(root2)
    if (a.length !== b.length) return false
    for (let i=0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true
    
    function dfs(root) {
        if (!root) return []
        return [
            ...dfs(root.left),
            ...(!root.left && !root.right ? [root.val] : []),
            ...(dfs(root.right))
        ]
    }
};

leafSimilar = function(root1, root2) {
    const a = dfs(root1)
    const b = dfs(root2)
    if (a.length !== b.length) return false
    for (let i=0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true
    
    function dfs(root, res=[]) {
        if (root.left || root.right) {
            if (root.left) dfs(root.left, res)
            if (root.right) dfs(root.right, res)
        } else {
            res.push(root.val)
        }
        return res
    }
}