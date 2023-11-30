# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        q, res = deque([root]), []
        while q:
            q2 = []
            res.append(q[-1].val)
            for node in q:
                if node.left:
                    q2.append(node.left)
                if node.right:
                    q2.append(node.right)
            q = q2
        return res
        
        #
        
        while q:
            l, last = len(q), None
            for i in range(0, l):
                cur = q.popleft()
                last = cur.val
                if cur.left:
                    q.append(cur.left)
                if cur.right:
                    q.append(cur.right)
            res.append(last)
        return res