# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        stack, res = [], 0
        while stack or root:
            if root:
                stack.append(root)
                root = root.left
                if root and not root.left and not root.right:
                    res += root.val
            else:
                root = stack.pop()
                root = root.right
        return res
        
        #
        
        if not root:
            return 0
        res = 0
        res += root.left.val if root.left and not root.left.left and not root.left.right else 0
        return res + self.sumOfLeftLeaves(root.left) + self.sumOfLeftLeaves(root.right)
            