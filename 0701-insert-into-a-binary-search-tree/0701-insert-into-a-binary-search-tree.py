# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        node = TreeNode(val)
        if not root:
            return node
        if not root.left and root.val > val:
            root.left = node
        elif not root.right and root.val < val:
            root.right = node
        if root.val > val:
            self.insertIntoBST(root.left, val)
        elif root.val < val:
            self.insertIntoBST(root.right, val)
        return root