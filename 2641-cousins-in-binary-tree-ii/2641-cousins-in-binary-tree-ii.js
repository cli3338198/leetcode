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
var replaceValueInTree = function(root) {
    const map = {}
    findSum(root, 0)
    const dummy = new TreeNode()
    dummy.right = root
    convertTree(dummy, -1)
    return root
    
    function convertTree(root, lvl) {
        if (!root) return
        let nextLvlSum = map[lvl+1]
        if (root.left) nextLvlSum -= root.left.val
        if (root.right) nextLvlSum -= root.right.val
        if (root.left) root.left.val = nextLvlSum
        if (root.right) root.right.val = nextLvlSum
        convertTree(root.left, lvl+1)
        convertTree(root.right, lvl+1)
    }
    
    function findSum(root, lvl) {
        if (!root) return
        map[lvl] = map[lvl] || 0
        map[lvl] += root.val
        findSum(root.left, lvl+1)
        findSum(root.right, lvl+1)
    }
};