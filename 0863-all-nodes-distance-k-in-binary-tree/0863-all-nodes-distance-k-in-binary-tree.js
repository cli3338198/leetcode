/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const graph = {}
    makeGraph(null, root)
    const res = []
    dfs(target.val, 0, new Set())
    return res
    
    function dfs(cur, dist, set) {
        if (dist === k) return res.push(cur)
        set.add(cur)
        for (const next of graph[cur] || []) {
            if (!set.has(next)) {
                dfs(next, dist + 1, set)
            }
        }
    }
    
    function makeGraph(parent, root) {
        if (!root) return
        graph[root.val] = graph[root.val] || []
        if (parent) {
            graph[parent.val] = graph[parent.val] || []
            graph[parent.val].push(root.val)
            graph[root.val].push(parent.val)
        }
        makeGraph(root, root.left)
        makeGraph(root, root.right)
    }
};