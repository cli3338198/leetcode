/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    return dfs(0, nums.length-1)
    
    function dfs(l, r) {
        if (l > r) return null
        let max = nums[l]
        let idx = l
        for (let i=l+1; i <= r; i++) {
            if (nums[i] > max) {
                max = nums[i]
                idx = i
            }
        }
        const root = new TreeNode(max)
        root.left = dfs(l, idx-1)
        root.right = dfs(idx+1, r)
        return root
    }
};

constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) return null
    let max = nums[0]
    let idx = 0
    for (let i=0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            idx = i
        }
    }
    const root = new TreeNode(max)
    root.left = constructMaximumBinaryTree(nums.slice(0, idx))
    root.right = constructMaximumBinaryTree(nums.slice(idx+1))
    return root
}