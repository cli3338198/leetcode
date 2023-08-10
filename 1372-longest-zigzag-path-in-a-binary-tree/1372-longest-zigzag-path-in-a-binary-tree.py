# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        res = 0
        
        def dfs(root: Optional[TreeNode], dir: int, cur: int) -> None:
            nonlocal res
            if not root:
                return
            res = max(res, cur)
            dfs(root.left, -1, 1 + (cur if dir == 1 else 0))
            dfs(root.right, 1, 1 + (cur if dir == -1 else 0))
        
        dfs(root, 0, 0)
        return res