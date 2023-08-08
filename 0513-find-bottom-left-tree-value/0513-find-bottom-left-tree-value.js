# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        res = None
        q = deque([root])
        while q:
            length = len(q)
            for i in range(0, length):
                node = q.popleft()
                if i == 0:
                    res = node.val
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        return res