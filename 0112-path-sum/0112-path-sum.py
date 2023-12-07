# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        stack = [(root, targetSum)]
        while stack:
            cur, val = stack.pop()
            if not cur.left and not cur.right and val == cur.val:
                return True
            if cur.left:
                stack.append((cur.left, val - cur.val))
            if cur.right:
                stack.append((cur.right, val - cur.val))
        return False
        
        #
        
        if not root:
            return False
        if not root.left and not root.right:
            return targetSum == root.val
        return self.hasPathSum(root.left, targetSum - root.val) or self.hasPathSum(root.right, targetSum - root.val)
        