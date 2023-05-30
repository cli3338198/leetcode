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

sumEvenGrandparent = function(root) {
    return dfs(root, null, null)
    
    function dfs(root, parent, grandparent) {
        if (!root) return 0
        let sum = 0
        if (grandparent && grandparent.val % 2 === 0) sum += root.val
        return sum + dfs(root.left, root, parent) + dfs(root.right, root, parent)
    }
}