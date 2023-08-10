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
 * @return {number[]}
 */
var findMode = function(root) {
    const map = {}
    dfs(root)
    let res = []
    let cnt = 0
    for (const root in map) {
        if (!res.length || map[root] === cnt) {
            res.push(+root)
            cnt = map[root]
        } else if (map[root] > cnt) {
            res = [+root]
            cnt = map[root]
        } 
    }
    return res
    
    function dfs(root) {
        if (!root) return
        map[root.val] = map[root.val] + 1 || 1
        dfs(root.left)
        dfs(root.right)
    }
};

findMode = function(root) {
    const map = {}
    const cnt = {}
    let max = 0
    const q = [root]
    while (q.length) {
        const len = q.length
        for (let i=0; i < len; i++) {
            const {val, left, right} = q.shift()
            map[val] = map[val] || 0
            map[val]++
            cnt[map[val]] = cnt[map[val]] || []
            cnt[map[val]].push(val)
            max = Math.max(max, map[val])
            if (left) q.push(left)
            if (right) q.push(right)
        }
    }
    return cnt[max]
}

findMode = function(root) {
    let res = []
    let curCnt = 0
    let maxCnt = 0
    let curVal = null
    dfs(root)
    return res
    
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        curCnt = (curVal === root.val ? curCnt : 0) + 1
        curVal = root.val
        if (curCnt > maxCnt) {
            maxCnt = curCnt
            res = [root.val]
        } else if (curCnt === maxCnt) {
            res.push(root.val)
        }
        dfs(root.right)
    }
}