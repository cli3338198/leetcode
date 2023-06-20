# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def distributeCoins(self, root: Optional[TreeNode]) -> int:
        res = 0
        
        def dfs(root: Optional[TreeNode]) -> int:
            nonlocal res
            if not root:
                return 0
            left = dfs(root.left)
            right = dfs(root.right)
            res += abs(left) + abs(right)
            return root.val + left + right - 1
        
        dfs(root)
        return res