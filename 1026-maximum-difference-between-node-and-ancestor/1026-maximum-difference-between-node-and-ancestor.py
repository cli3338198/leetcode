# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        res = 0
        
        def dfs(root: Optional[TreeNode], cur_min: int, cur_max: int) -> None:
            nonlocal res
            if not root:
                return
            cur_min = min(cur_min, root.val)
            cur_max = max(cur_max, root.val)
            res = max(res, abs(root.val-cur_min), abs(root.val-cur_max))
            dfs(root.left, cur_min, cur_max)
            dfs(root.right, cur_min, cur_max)
            
        dfs(root, root.val, root.val)
        return res