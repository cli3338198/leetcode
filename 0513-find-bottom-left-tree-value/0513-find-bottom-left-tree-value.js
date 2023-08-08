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
var findBottomLeftValue = function(root) {
    const q = [root]
    let res = null
    while (q.length) {
        const len = q.length
        for (let i=0; i < len; i++) {
            const {val, left, right} = q.shift()
            if (i === 0) res = val
            if (left) q.push(left)
            if (right) q.push(right)
        }
    }
    return res
};

findBottomLeftValue = function(root) {
    let maxDepth = 0
    let res = root.val
    dfs(root, 0)
    return res
    
    function dfs(root, depth) {
        if (!root) return
        if (!root.left) {
            if (depth > maxDepth) {
                maxDepth = depth
                res = root.val
            }
        }
        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1)
    }
}