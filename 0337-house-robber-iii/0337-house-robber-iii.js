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
var rob = function(root) {
    return Math.max(...helper(root))
    
    function helper(root) {
        if (!root) return [0, 0]
        const [wLeft, woLeft] = helper(root.left)
        const [wRight, woRight] = helper(root.right)
        return [
            root.val + woLeft + woRight,
            Math.max(wLeft, woLeft) + Math.max(wRight, woRight)
        ]
    }
};