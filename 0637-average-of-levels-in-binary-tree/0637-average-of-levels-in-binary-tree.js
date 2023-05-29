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
    const q = [root]
    while (q.length) {
        const len = q.length
        let sum = 0
        for (let i=0; i < len; i++) {
            const {val, left, right} = q.shift()
            sum += val
            if (left) q.push(left)
            if (right) q.push(right)
        }
        res.push(sum / len)
    }
    return res
};