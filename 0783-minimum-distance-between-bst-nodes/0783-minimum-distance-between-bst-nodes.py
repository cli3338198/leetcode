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
        stack, prev, mn = [], float("inf"), float("inf")
        while stack or root:
            if root:
                stack.append(root)
                root = root.left
            else:
                root = stack.pop()
                mn = min(mn, abs(prev-root.val))
                prev = root.val
                root = root.right
        return mn        
        
        #
        
        self.dfs(root)
        return self.min