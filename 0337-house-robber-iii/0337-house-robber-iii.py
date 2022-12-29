# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        
        def helper(root: Optional[TreeNode]) -> List[int]:
            if not root:
                return [0, 0]
            
            with_left, without_left = helper(root.left)
            with_right, without_right = helper(root.right)
            
            return [
                root.val + without_left + without_right,
                max(with_left, without_left) + max(with_right, without_right)
            ]
        
        return max(*helper(root))