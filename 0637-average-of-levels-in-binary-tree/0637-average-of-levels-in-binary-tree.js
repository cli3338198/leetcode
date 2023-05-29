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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const res = []
    dfs(root, 0)
    return res.map(x => (x.reduce((acc, val) => acc + val, 0)) / x.length)
    
    function dfs(root, lvl) {
        if (!root) return
        if (!res[lvl]) res[lvl] = []
        res[lvl].push(root.val)
        dfs(root.left, lvl+1)
        dfs(root.right, lvl+1)
    }
};