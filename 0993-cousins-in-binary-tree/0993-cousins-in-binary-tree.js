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

isCousins = function(root, x, y) {
    const q = [[root, null]]
    while (q.length) {
        const len = q.length
        let p1 = null
        let p2 = null
        for (let i=0; i < len; i++) {
            const [root, parent] = q.shift()
            if (root.val === x) p1 = parent
            if (root.val === y) p2 = parent
            if (p1 && p2) return p1 !== p2
            if (root.left) q.push([root.left, root])
            if (root.right) q.push([root.right, root])
        }
    }
    return false
}