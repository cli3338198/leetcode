# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.mp = {}
        
    def find_sum(self, root: Optional[TreeNode], lvl: int) -> None:
        if not root:
            return
        if lvl not in self.mp:
            self.mp[lvl] = 0
        self.mp[lvl] += root.val
        self.find_sum(root.left, lvl+1)
        self.find_sum(root.right, lvl+1)
        
    def convert(self, root: Optional[TreeNode], lvl: int) -> None:
        if not root:
            return
        lvl_sum = self.mp.get(lvl+1, 0)
        if root.left:
            lvl_sum -= root.left.val
        if root.right:
            lvl_sum -= root.right.val
        if root.left:
            root.left.val = lvl_sum
        if root.right:
            root.right.val = lvl_sum
        self.convert(root.left, lvl+1)
        self.convert(root.right, lvl+1)
    
    def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        self.find_sum(root, 0)
        dummy = TreeNode(right=root)
        self.convert(dummy, -1)
        return root