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
var sumOfLeftLeaves = function(root) {
    if (!root) return 0
    let sum = 0
    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val
    }
    return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};

sumOfLeftLeaves = function(root) {
    let sum = 0
    dfs(root)
    return sum
    
    function dfs(root) {
        if (!root) return
        if (root.left && !root.left.left && !root.left.right) {
            sum += root.left.val
        }
        dfs(root.left)
        dfs(root.right)
    }
}

sumOfLeftLeaves = function(root) {
    const q = [root]
    let sum = 0
    while (q.length) {
        const n = q.shift()
        if (!n) break
        if (n.left && !n.left.left && !n.left.right) sum += n.left.val
        if (n.left) q.push(n.left)
        if (n.right) q.push(n.right)
    }
    return sum
}