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
var maxLevelSum = function(root) {
    const q = [root]
    let curMax = root.val
    let res = 1
    let lvl = 1
    while (q.length) {
        const len = q.length
        let curSum = 0
        for (let i=0; i < len; i++) {
            const node = q.shift()
            curSum += node.val
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        if (curSum > curMax) {
            curMax = curSum
            res = lvl
        }
        lvl++
    }
    return res
};

maxLevelSum = function(root) {
    const map = {}
    dfs(root, 1)
    let max = null
    let res = null
    for (const lvl in map) {
        if (res === null || map[lvl] > max) {
            max = map[lvl]
            res = lvl
        }
    }
    return res
    
    function dfs(root, lvl) {
        if (!root) return
        map[lvl] = map[lvl] + root.val || root.val
        dfs(root.left, lvl+1)
        dfs(root.right, lvl+1)
    }
}