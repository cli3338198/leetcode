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

amountOfTime = function(root, start) {
    let res = 0
    dfs(root)
    return res
    
    function dfs(root) {
        if (!root) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        if (root.val === start) {
            res = Math.max(left, right)
            return -1
        } else if (left >= 0 && right >= 0) {
            return 1 + Math.max(left, right)
        } else {
            res = Math.max(res, Math.abs(left - right))
            return Math.min(left, right) - 1
        }
    }
}

amountOfTime = function(root, start) {
    let res = 0
    dfs(root)
    return res
    
    function dfs(root) {
        if (!root) return [false, 0]
        const [leftFound, leftDepth] = dfs(root.left)
        const [rightFound, rightDepth] = dfs(root.right)
        if (root.val === start) {
            res = Math.max(leftDepth, rightDepth)
            return [true, 0]
        }
        if (leftFound) {
            res = Math.max(res, 1 + leftDepth + rightDepth)
            return [true, 1 + leftDepth]
        } else if (rightFound) {
            res = Math.max(res, 1 + leftDepth + rightDepth)
            return [true, 1 + rightDepth]
        } else {
            return [false, 1 + Math.max(leftDepth, rightDepth)]
        }

    }
}