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
var minDiffInBST = function(root) {
    let last = null
    let min = Infinity
    dfs(root)
    return min
    
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        if (last === null) {
            last = root.val
        } else {
            min = Math.min(min, root.val-last)
            last = root.val
        }
        dfs(root.right)
    }
};

minDiffInBST = function(root) {
    const stack = []
    let min = Infinity
    let prev = new TreeNode(Infinity)
    while (stack.length || root) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            const node = stack.pop()
            min = Math.min(min, Math.abs(prev.val-node.val))
            prev = node
            root = node.right
        }        
    }
    return min
}