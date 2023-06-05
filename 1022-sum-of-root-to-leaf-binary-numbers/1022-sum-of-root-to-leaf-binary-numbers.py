# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root: Optional[TreeNode], val: int) -> int:
        if not root:
            return 0
        val = 2 * val + root.val
        if root.left == root.right:
            return val
        return self.dfs(root.left, val) + self.dfs(root.right, val)
    
    def sumRootToLeaf(self, root: Optional[TreeNode]) -> int:
        return self.dfs(root, 0)