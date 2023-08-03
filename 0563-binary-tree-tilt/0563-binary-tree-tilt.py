# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return 0, 0
        lsum, ltilt = self.dfs(root.left)
        rsum, rtilt = self.dfs(root.right)
        return root.val + lsum + rsum, abs(lsum-rsum) + ltilt + rtilt
    
    def findTilt(self, root: Optional[TreeNode]) -> int:
        _, a = self.dfs(root)
        return a