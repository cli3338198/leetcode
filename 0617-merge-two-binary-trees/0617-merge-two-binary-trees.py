# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, r1: Optional[TreeNode], r2: Optional[TreeNode]) -> Optional[TreeNode]:
        if not r1:
            return r2
        if not r2:
            return r1
        root = TreeNode()
        root.val = r1.val + r2.val
        root.left = self.mergeTrees(r1.left, r2.left)
        root.right = self.mergeTrees(r1.right, r2.right)
        return root