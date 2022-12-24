# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        
        res = [-inf]
        
        def helper(root: Optional[TreeNode]) -> None:
            
            if not root:
                return 0
            
            left = max(0, helper(root.left))
            right = max(0, helper(root.right))
            res[0] = max(res[0], left + root.val + right)
            return root.val + max(left, right)
            
            
        helper(root)
        
        return res[0]