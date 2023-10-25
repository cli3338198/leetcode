# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        res, q = 0, deque([root])
        while q:
            l = len(q)
            for _ in range(0, l):
                root = q.popleft()
                if root.left:
                    q.append(root.left)
                if root.right:
                    q.append(root.right)
            res += 1
        return res
    
        #
        
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))