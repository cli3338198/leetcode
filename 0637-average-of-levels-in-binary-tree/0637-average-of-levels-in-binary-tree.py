# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        q = deque()
        q.append(root)
        res = []
        while q:
            l = len(q)
            s = 0
            for i in range(0, l):
                n = q.popleft()
                s += n.val
                if n.left:
                    q.append(n.left)
                if n.right:
                    q.append(n.right)
            res.append(s / l)
        return res
                