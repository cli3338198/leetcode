# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        
        q = deque([root])
        res = []
        
        while q:
            l = len(q)
            subres = []
            for _ in range(l):
                n = q.popleft()
                if n:
                    subres.append(n.val)
                    if n.left:
                        q.append(n.left)
                    if n.right:
                        q.append(n.right)
            
            res.append(subres)
        
        return [arr if i == 0 or i % 2 == 0 else reversed(arr) for i, arr in enumerate(res)]
            
            
        