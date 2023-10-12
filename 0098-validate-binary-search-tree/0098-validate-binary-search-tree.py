# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root: Optional[TreeNode], min: int = -inf, max: int = inf) -> bool:
        if not root:
            return True
        if root.val > min and root.val < max:
            return self.dfs(root.left, min, root.val) and self.dfs(root.right, root.val, max)
        else:
            return False
    
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.dfs(root)