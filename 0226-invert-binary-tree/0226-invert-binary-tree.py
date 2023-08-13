# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return root
        left = root.left
        root.left = root.right
        root.right = left
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root
        
        if not root:
            return root
        q = deque([root])
        while q:
            cur = q.popleft()
            left = cur.left
            cur.left = cur.right
            cur.right = left
            if cur.left:
                q.append(cur.left)
            if cur.right:
                q.append(cur.right)
        return root
        
        if not root:
            return root
        left = root.left
        root.left = self.invertTree(root.right)
        root.right = self.invertTree(left)
        return root