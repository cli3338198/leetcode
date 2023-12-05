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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const nodes = [], map = new Map()
    dfs(root, 0, 0) 
    nodes.sort(([r1, c1, v1], [r2, c2, v2]) => c1 - c2 || r2 - r1 || v1 - v2)
    for (const [r, c, v] of nodes) {
        if (!map.has(c)) map.set(c, [])
        map.get(c).push(v)
    }
    return [...map.values()]
    
    function dfs(root, r, c) {
        if (root) {
            dfs(root.left, r-1, c-1)
            nodes.push([r, c, root.val])
            dfs(root.right, r-1, c+1)
        }
    }
};