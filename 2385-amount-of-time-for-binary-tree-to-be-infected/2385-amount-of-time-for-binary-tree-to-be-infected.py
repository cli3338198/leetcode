# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.res = 0
        self.start = 0
    
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        self.start = start
        self.dfs(root)
        return self.res
    
    def dfs(self, root: Optional[TreeNode]):
        if not root:
            return False, 0
        l_found, l_height = self.dfs(root.left)
        r_found, r_height = self.dfs(root.right)
        if root.val == self.start:
            self.res = max(l_height, r_height)
            return True, 0
        if l_found:
            self.res = max(self.res, 1 + l_height + r_height)
            return True, l_height + 1
        elif r_found:
            self.res = max(self.res, 1 + l_height + r_height)
            return True, r_height + 1
        return False, 1 + max(l_height, r_height)