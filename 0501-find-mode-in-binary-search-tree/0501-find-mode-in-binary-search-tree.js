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