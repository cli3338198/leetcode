# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.min = inf
        self.prev = None
        
    def dfs(self, root: Optional[TreeNode]) -> int:
        if not root:
            return
        self.dfs(root.left)
        if self.prev != None:
            self.min = min(self.min, root.val-self.prev)
        self.prev = root.val
        self.dfs(root.right)
        return self.min
    
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        return self.dfs(root)