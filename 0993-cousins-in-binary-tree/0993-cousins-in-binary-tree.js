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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let l1 = null
    let p1 = null
    let l2 = null
    let p2 = null
    const q = [[root, 0, null]]
    while (q.length) {
        const [root, lvl, par] = q.shift()
        if (root.val === x) {
            l1 = lvl
            p1 = par
        }
        if (root.val === y) {
            l2 = lvl
            p2 = par
        }
        if (root.left) q.push([root.left, lvl+1, root])
        if (root.right) q.push([root.right, lvl+1, root])
    }
    return l1 === l2 && p1 !== p2
};