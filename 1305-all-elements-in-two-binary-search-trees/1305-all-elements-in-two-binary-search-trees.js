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