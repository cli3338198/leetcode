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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const arr = dfs(root)
    return helper(0, arr.length-1)
    
    function helper(lo, hi) {
        if (lo > hi) return null
        const mid = Math.floor((lo+hi)/2)
        const root = new TreeNode(arr[mid])
        root.left = helper(lo, mid-1)
        root.right = helper(mid+1, hi)
        return root
    }
    
    function dfs(cur) {
        const res = []
        const stack = []
        while (cur || stack.length) {
            if (cur) {
                stack.push(cur)
                cur = cur.left
            } else {
                cur = stack.pop()
                res.push(cur.val)
                cur = cur.right
            }
        }
        return res
    }
};

balanceBST = function(root) {
    const arr = dfs(root)
    return balance(0, arr.length-1)
    
    function balance(lo, hi) {
        if (lo > hi) return null
        const mid = Math.floor((lo+hi)/2)
        const root = new TreeNode(arr[mid])
        root.left = balance(lo, mid-1)
        root.right = balance(mid+1, hi)
        return root
    }
    
    function dfs(root) {
        if (!root) return []
        return [...dfs(root.left), root.val, ...dfs(root.right)]
    }
}