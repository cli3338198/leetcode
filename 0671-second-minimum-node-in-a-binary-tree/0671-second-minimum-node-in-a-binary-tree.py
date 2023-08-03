# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
        res = float("inf")
        
        def dfs(cur: Optional[TreeNode]) -> None:
            nonlocal res
            if not cur:
                return
            if cur.val > root.val and res > cur.val:
                res = cur.val
                return
            dfs(cur.left)
            dfs(cur.right)
            
        dfs(root)
        return res if res != float("inf") else -1