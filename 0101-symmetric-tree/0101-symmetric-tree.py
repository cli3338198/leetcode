# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        stack = [[root.left, root.right]]
        while stack:
            left, right = stack.pop()
            if not left and not right:
                continue
            elif not left or not right or left.val != right.val:
                return False
            else:
                stack.append([left.left, right.right])
                stack.append([left.right, right.left])
        return True
        
        #
        
        def dfs(root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
            if not root1 and not root2:
                return True
            if not root1 or not root2:
                return False
            if root1.val != root2.val:
                return False
            return dfs(root1.left, root2.right) and dfs(root1.right, root2.left)
        
        return dfs(root, root)
            