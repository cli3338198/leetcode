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
var sumEvenGrandparent = function(root) {
    const q = [[root, null, null]]
    let sum = 0
    while (q.length) {
        const [node, parent, grandparent] = q.shift()
        if (grandparent && grandparent.val % 2 === 0) sum += node.val
        if (node.left) q.push([node.left, node, parent])
        if (node.right) q.push([node.right, node, parent])
    }
    return sum
};