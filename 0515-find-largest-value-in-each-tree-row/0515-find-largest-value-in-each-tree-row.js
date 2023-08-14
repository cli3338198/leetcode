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
var largestValues = function(root) {
    const res = []
    dfs(root, 0)
    return res
    
    function dfs(root, row) {
        if (!root) return
        if (row in res) {
            res[row] = Math.max(res[row], root.val)
        } else {
            res[row] = root.val
        }
        dfs(root.left, row+1)
        dfs(root.right, row+1)
    }
};

largestValues = function(root) {
    if (!root) return []
    const q = [root]
    const res = []
    while (q.length) {
        const len = q.length
        let max = -Infinity
        for (let i=0; i < len; i++) {
            const {val, left, right} = q.shift()
            max = Math.max(max, val)
            if (left) q.push(left)
            if (right) q.push(right)
        }
        res.push(max)
    }
    return res
}