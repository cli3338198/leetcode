# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        q = deque()
        q.append((root, None))
        while q:
            length = len(q)
            p1 = None
            p2 = None
            for _ in range(len(q)):
                node, parent = q.popleft()
                if node.val == x:
                    p1 = parent
                if node.val == y:
                    p2 = parent
                if p1 and p2:
                    return p1 != p2
                if node.left:
                    q.append((node.left, node))
                if node.right:
                    q.append((node.right, node))
        return False