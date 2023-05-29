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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const arr = []
    dfs(root)
    let res = Infinity
    for (let i=0; i <= arr.length-2; i++) {
        res = Math.min(res, arr[i+1] - arr[i])
    }
    return res
    
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        arr.push(root.val)
        dfs(root.right)
    }
};