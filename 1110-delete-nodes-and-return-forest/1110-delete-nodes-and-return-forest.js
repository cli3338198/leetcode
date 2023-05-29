/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const set = new Set(to_delete)
    const res = []
    root = dfs(root)
    if (root) {
        res.push(root)
    }
    return res
    
    function dfs(root) {
        if (!root) return root
        root.left = dfs(root.left)
        root.right = dfs(root.right)
        if (!set.has(root.val)) return root
        if (root.left) res.push(root.left)
        if (root.right) res.push(root.right)
        return null
    }
};