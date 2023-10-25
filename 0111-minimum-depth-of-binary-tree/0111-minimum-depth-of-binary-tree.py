# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        res, q = 0, deque([root])
        while q:
            res += 1
            l = len(q)
            for _ in range(0, l):
                cur = q.popleft()
                if not cur.left and not cur.right:
                    return res
                if cur.left:
                    q.append(cur.left)
                if cur.right:
                    q.append(cur.right)