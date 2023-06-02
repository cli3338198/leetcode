# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def dfs(r1: Optional[TreeNode], r2: Optional[TreeNode], lvl: int) -> None:
            if not r1 and not r2:
                return
            if lvl % 2 != 0:
                r1.val, r2.val = r2.val, r1.val
            dfs(r1.left, r2.right, lvl+1)
            dfs(r1.right, r2.left, lvl+1)
        
        dfs(root.left, root.right, 1)
        return root
            