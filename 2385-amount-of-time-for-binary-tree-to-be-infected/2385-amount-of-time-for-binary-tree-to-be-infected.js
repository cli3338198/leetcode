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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    const graph = {}
    makeGraph(null, root)
    return dfs(start, new Set())
    
    function dfs(cur, set) {
        let res = 0
        set.add(cur)
        for (const next of graph[cur] || []) {
            if (!set.has(next)) {
                set.add(next)
                res = Math.max(res, 1 + dfs(next, set))
            }
        }
        return res
    }
    
    function makeGraph(parent, root) {
        if (!root) return
        graph[root.val] = graph[root.val] || []
        if (parent) {
            graph[parent.val] = graph[parent.val] || []
            graph[root.val].push(parent.val)
            graph[parent.val].push(root.val)
        }
        makeGraph(root, root.left)
        makeGraph(root, root.right)
    }
};

amountOfTime = function(root, start) {
    const graph = {}
    makeGraph(null, root)
    return bfs(start)
    
    function bfs(start) {
        const q = [start]
        let res = -1
        const set = new Set()
        set.add(start)
        while (q.length) {
            const len = q.length
            for (let i=0; i < len; i++) {
                const cur = q.shift()
                for (const next of graph[cur] || []) {
                    if (!set.has(next)) {
                        set.add(next)
                        q.push(next)
                    }
                }
            }
            res++
        }
        return res
    }
    
    function makeGraph(parent, root) {
        if (!root) return
        graph[root.val] = graph[root.val] || []
        if (parent) {
            graph[parent.val] = graph[parent.val] || []
            graph[root.val].push(parent.val)
            graph[parent.val].push(root.val)
        }
        makeGraph(root, root.left)
        makeGraph(root, root.right)
    }
}