# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.min = float("inf")
        self.prev = None
        
    def dfs(self, root: Optional[TreeNode]) -> None:
        if not root:
            return
        self.dfs(root.left)
        if not self.prev:
            self.prev = root
        else:
            self.min = min(self.min, abs(self.prev.val - root.val))
            self.prev = root
        self.dfs(root.right)
    
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        self.dfs(root)
        return self.min