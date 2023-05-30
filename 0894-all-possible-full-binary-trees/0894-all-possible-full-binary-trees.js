/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    const dp = {}
    return helper(n)
    
    function helper(n) {
        if (n % 2 == 0) return []
        if (n === 1) return [new TreeNode()]
        if (n in dp) return dp[n]
        const res = []
        for (let i=1; i < n; i += 2) {
            for (const j of allPossibleFBT(i)) {
                for (const k of allPossibleFBT(n-i-1)) {
                    const root = new TreeNode()
                    root.left = j
                    root.right = k
                    res.push(root)
                }
            }
        }
        return dp[n] = res
    }
};