# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class FindElements:

    def __init__(self, root: Optional[TreeNode]):
        self.set = set()
        self.root = self.recover(root, 0)

    def find(self, target: int) -> bool:
        return target in self.set
        
    def recover(self, root: Optional[TreeNode], x: int) -> TreeNode:
        if not root:
            return None
        root.val = x
        self.set.add(x)
        root.left = self.recover(root.left, 2 * x + 1)
        root.right = self.recover(root.right, 2 * x + 2)
        return root
        


# Your FindElements object will be instantiated and called as such:
# obj = FindElements(root)
# param_1 = obj.find(target)