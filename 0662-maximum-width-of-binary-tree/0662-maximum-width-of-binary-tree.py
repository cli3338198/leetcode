# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        ans, q = 0, deque([])
        q.append([root, 0])
        while q:
            l = len(q)
            left = right = None
            for i in range(0, l):
                n, x = q.popleft()
                if i == 0:
                    left = x
                right = x
                if n.left:
                    q.append([n.left, 2 * x])
                if n.right:
                    q.append([n.right, 2 * x + 1])
            ans = max(ans, right - left + 1)
        return ans
                
                