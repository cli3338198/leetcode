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
var findSecondMinimumValue = function(root) {
    let res = Infinity
    dfs(root)
    return res === Infinity ? -1 : res
    
    function dfs(cur) {
        if (!cur) return
        if (cur.val > root.val && res > cur.val) {
            return res = cur.val
        }
        dfs(cur.left)
        dfs(cur.right)
    }
};