# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        q, lvl = deque([root]), 0
        while q:
            ln = len(q)
            last = None
            for i in range(0, ln):
                cur = q.popleft()
                if lvl % 2 == 0:
                    if cur.val % 2 == 0:
                        return False
                    if last and last.val >= cur.val:
                        return False
                else:
                    if cur.val % 2 != 0:
                        return False
                    if last and last.val <= cur.val:
                        return False
                last = cur
                if cur.left:
                    q.append(cur.left)
                if cur.right:
                    q.append(cur.right)
            lvl += 1
        return True