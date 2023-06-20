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
var maxLevelSum = function(root) {
    const q = [root]
    let curMax = root.val
    let res = 1
    let lvl = 1
    while (q.length) {
        const len = q.length
        let curSum = 0
        for (let i=0; i < len; i++) {
            const node = q.shift()
            curSum += node.val
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        if (curSum > curMax) {
            curMax = curSum
            res = lvl
        }
        lvl++
    }
    return res
};