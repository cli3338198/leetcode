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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const set = new Set()
    return dfs(root)
    
    function dfs(root) {
        if (!root) return false
        if (set.has(k - root.val)) return true
        set.add(root.val)
        return dfs(root.left) || dfs(root.right)
    }
};

findTarget = function(root, k) {
    const inOrdered = inOrder(root)
    let l = 0, r = inOrdered.length-1
    while (l < r) {
        if (inOrdered[l] + inOrdered[r] === k) {
            return true
        } else if (inOrdered[l] + inOrdered[r] > k) {
            r--
        } else {
            l++
        }
    }
    return false
    
    function inOrder(root) {
        if (!root) return []
        return [...inOrder(root.left), root.val, ...inOrder(root.right)]
    }
}