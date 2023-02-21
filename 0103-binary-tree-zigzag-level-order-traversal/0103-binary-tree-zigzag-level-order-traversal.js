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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    const q = [[root, 0]]
    const res = []
    while (q.length) {
        const [n, i] = q.shift()
        res[i] = res[i] || []
        if (n) {
            res[i].push(n.val)
            if (n.left) q.push([n.left, i+1])
            if (n.right) q.push([n.right, i+1])
        }
    }
    return res.map((arr, i) => i > 0 && i % 2 !== 0 ? arr.reverse() : arr)
};