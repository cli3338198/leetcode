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
var sumRootToLeaf = function(root) {
    return dfs(root, 0)
    
    function dfs(root, val) {
        if (!root) return 0
        val = 2 * val + root.val
        if (root.left === root.right) return val
        return dfs(root.left, val)+ dfs(root.right, val)
    }
};

sumRootToLeaf = function(root) {
    if (!root) return 0
    const q = [[root, root.val]]
    let res = 0
    while (q.length) {
        const [root, val] = q.shift()
        if (!root.left && !root.right) res += val
        if (root.left) q.push([root.left, 2 * val + root.left.val])
        if (root.right) q.push([root.right, 2 * val + root.right.val])
    }
    return res
}