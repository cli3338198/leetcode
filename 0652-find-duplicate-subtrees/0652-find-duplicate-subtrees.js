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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const map = {}
    const res = []
    helper(root)
    return res
    
    function helper(root) {
        if (!root) return null
        const tree = helper(root.left) + ',' + helper(root.right) + ',' + root.val
        map[tree] = map[tree] + 1 || 1
        if (map[tree] === 2) res.push(root)
        return tree     
    }
};