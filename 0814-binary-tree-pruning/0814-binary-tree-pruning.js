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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    return dfs(root)[0]
    
    function dfs(root) {
        if (!root) return [root, false]
        const [left, leftHasOne] = dfs(root.left)
        const [right, rightHasOne] = dfs(root.right)
        root.left = leftHasOne ? left : null
        root.right = rightHasOne ? right : null
        if (root.val === 1 || root.left || root.right) {
            return [root, true]
        } else {
            return [null, false]
        }
    }
};

pruneTree = function(root) {
    if (!root) return root
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    if (!root.left && !root.right) {
        return root.val === 1 ? root : null
    } else {
        return root
    }
}