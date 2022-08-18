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
var levelOrderBottom = function(root) {
    const q = [[root, 0]]
    const res = []
    if (!root) return res
    while (q.length) {
        const [node, lvl] = q.shift()
        if (lvl in res) {
            res[lvl].push(node.val)
        } else {
            res[lvl] = [node.val]
        }
        if (node.left) q.push([node.left, lvl+1])
        if (node.right) q.push([node.right, lvl+1])
    }
    return res.reverse()
};