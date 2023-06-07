/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let i = 0
    return helper(Infinity)
    
    function helper(hi) {
        if (i >= preorder.length || preorder[i] > hi) return null
        const root = new TreeNode(preorder[i])
        i++
        root.left = helper(root.val)
        root.right = helper(hi)
        return root
    }
};