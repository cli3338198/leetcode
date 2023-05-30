/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    return find(cloned)
    
    function find(cur) {
        if (!cur) return
        if (cur.val === target.val) return cur
        return find(cur.left) || find(cur.right)
    }
};